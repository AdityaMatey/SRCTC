import axios from "axios"
import { useNavigate } from "react-router"
import { useState } from "react"
import { toast } from "react-toastify"
import Header from "../../Components/HeaderComponent/Header"
import '../Home/Home.css'
import { URL } from "../../config"

const FetchPassenger = () => {

    const navigate = useNavigate()

    const[trainNumber, setTrainNumber] = useState('')
    const[journeyDate , setJourneyDate] = useState('')
    const[passengers, setPassengers] = useState([])

    const searchPassengers = () => {
        if(trainNumber.length === 0){
            toast.warning("Please Enter Train Number")
        }else if(journeyDate.length ===0){
            toast.warning('Please Enter Date')
        }
        else{
                const body = {
                    trainNumber,
                    journeyDate
                }

                const url = `${URL}/passenger//byDateAndTrainNumber`
                axios.post(url, body).then((response)=>{
                    const result = response.data
                    if(result['status']=='success'){
                    setPassengers(result['data'])
                    }
                    else{
                        toast.error("There are no passengers")
                    }
                })
               
            }
        }


    return (
        <div className="home">
                <div>
                    <Header/>
                </div>

                <div className="row">
                <div className="col"></div>
                <div className="col">
                <div className='container loginblock'>
                    <div className='heading'>
                        <h1 className='loginheading'>Search Passengers</h1>
                    </div>
                    <br />
                    <br/>
                    <div className="form">
                        <div className="mb-3">
                            <label className="label-control"><h5>Train Number</h5></label>
                            <input onChange={(e)=>{
                                setTrainNumber(e.target.value)
                            }} type="number" className="form-control" />
                        </div>
                        <br/>
                        <div className="mb-3">
                            <label className="label-control"><h5>Journey Date</h5></label>
                            <br />
                            <input onChange={(e)=>{
                                setJourneyDate(e.target.value)
                            }} type="date" className="form-control" />
                        </div>


                        <div className="mb-3">
                            <button onClick={searchPassengers} className="btn btn-primary">Search Passengers</button>
                        </div>
                    </div>
                </div> 
                </div>
                <div className="col"></div>
            </div>


        </div>
    )
}

export default FetchPassenger