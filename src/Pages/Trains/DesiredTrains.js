
import axios from "axios"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { useEffect, useState } from "react/cjs/react.development"
import './Trains.css'
import Header from "../../Components/HeaderComponent/Header"
import TrainComponent from "../../Components/TrainsComponent/TrainComponent"
import {URL} from '../../config'

const DesiredTrains = () => {

    const navigate = useNavigate()
    const{ source, destination } = sessionStorage
    const[trains , setTrains] = useState([])

    const searchDesiredTrains = () => {
        console.log(`${source}`)
        console.log(`${destination}`)
        const body = {
            source, 
            destination
        }
        const url = `${URL}/trains/list`
        axios.post(url, body).then((response)=>{
            const result = response.data
            if(result['status'] == 'success'){
                setTrains(result['data'])
            }else{
                toast.error(result['error'])
                navigate('/')
            }

        })
    }


    useEffect(() => {
        searchDesiredTrains()
       console.log('getting called')
    }, [])
    
   

    return (
        <div className="trains">
            <div>
                <Header/>
            </div>
<br/>
        <div className="row">
            <div className="col-3"></div>
            <div className="col-8">
            <div className="container">
            <h1>Trains Between Source And Destination</h1>
            </div>
            </div>
            <div className="col-2"></div>
        </div>
        <br/>
        <br/>
        
       
        <div className='container'>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-10">
                            <div className='container'>
                            {trains.map(train => {
                                return <TrainComponent train={train}/>
                            })}
                            </div>
                            <br />
                        </div>
                        <div className="col"></div>
                    </div>
                </div>





        </div>

    )
}

export default DesiredTrains