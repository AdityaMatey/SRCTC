import axios from 'axios'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useState } from 'react/cjs/react.development'
import {URL} from '../../config'
import { useEffect } from 'react'
import Header from '../../Components/HeaderComponent/Header'
import TrainComponent from '../../Components/TrainsComponent/TrainComponent'
import '../Home/Home.css'

const Trains = () => {

    const { userId , firstName , source, destination, role }= sessionStorage

    const navigate = useNavigate()

    const [trains , setTrains] = useState([])

    const gotoAddTrain = () => {
        navigate('/addTrain')
    }

    const searchTrains = () =>{
        const url = `${URL}/trains/all`
        axios.get(url).then((response)=>{
            const result = response.data
            if(result['status']=='success'){
                setTrains(result['data'])
            }else{
                toast.error(result['error'])
            }
        })
    }

    // const searchDesiredTrains = () =>{
    //     const body = {
    //         source,
    //         destination
    //     }

    //     const url = 'http://localhost:7070/trains/list'
    //     axios.get(url, body).then((response)=>{
    //         const result = response.data
    //         if(result['status']=='success'){
    //             setTrains(result['data'])
    //         }else{
    //             toast.error(result['error'])
    //         }
    //     })
    // }

    useEffect(()=>{
        searchTrains()
        console.log('Getting called')
    }, [])

    return (

        <div className='home'>
        <div>

            <div>
                <Header/>
                </div>

            {/* <div className='container'>
                <h1 className='srctcheading'>SRCTC</h1>
            </div>  */}

        {/* <div className='container'>        
            <div className="trainheading">
                <h1 className='trainheading1'>Trains</h1>
            </div> */}
   
                <br />
                <br />

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

                { role == "admin" && (
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button onClick={gotoAddTrain} class="btn btn-primary addTrainButton" type="button">Add Train</button>
                </div>
                )}   

        </div>

                    <br/>
                    <br/>
                    <br/>
        </div>
    )
}

export default Trains