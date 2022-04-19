import '../SignUp/SignUp.css'
import axios from "axios"
import { useState } from "react"
import {URL} from '../../config'
import { toast } from "react-toastify"
import '../../Pages/Home/Home.css'
import Header from "../../Components/HeaderComponent/Header"
import { useNavigate } from 'react-router'


const AddTrain = () => {

    const navigate = useNavigate()

    const[trainName, setTrainName] = useState('')
    const[source, setSource] = useState('')
    const[destination, setDestination] = useState('')
    const[departure, setDeparture] = useState('')
    const[journeyDuration, setJourneyDuration] = useState('')
    const[arrivalAtDestination, setArrivalAtDestination] = useState('')
    const[availabilityOfSeats, setAvailabilityOfSeats] = useState('')

    const addTrain = () => {
        if(trainName.length === 0){
            toast.warning("Please Enter Train Name")
        }else if(source.length === 0){
            toast.warning("Please Enter Source")
        }else if(destination.length===0){
            toast.warning("Please Enter Destination")
        }else if(departure.length===0){
            toast.warning("Please Enter departure time")
        }else if(journeyDuration.length ===0){
            toast.warning("Please Enter Journey Duration")
        }else if(arrivalAtDestination.length ===0){
            toast.warning("Please Enter Arrival Time")
        }else if(availabilityOfSeats.length===0){
            toast.warning("Please Enter Availability of Seats")
        }else {
            const body = {
                trainName, 
                source,
                destination, 
                departure, 
                journeyDuration, 
                arrivalAtDestination, 
                availabilityOfSeats
            }

            const url = `${URL}/trains/save`
            axios.post(url, body).then((response)=> {
                const result = response.data
                if(result['status']=='success'){
                    toast.success("Train Successfully Added")
                    navigate('/trains')
                }else{
                    toast.error("Something went wrong")
                }
                
            })
            
        }
       
    }

    return (
        <div className='home'>

            <div>
                <Header/>
            </div>

            <div className="row">
           
            <div className="col addtrainblock">
                <div className='container signupblock'>
                <div className='heading'>
                    <h1 className='signupheading'>Add Train</h1> 
                </div>

                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                        <label className="label-control"><strong>Train Name</strong></label>
                        <input onChange={(e)=>{
                            setTrainName(e.target.value)
                        }} type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label className="label-control">Source</label>
                        <input onChange={(e)=>{
                            setSource(e.target.value)
                        }} list="datalistOptions" type="text" className="form-control" />
                        <datalist id="datalistOptions">
                        <option value="Mumbai"/>
                        <option value="Pune"/>
                        <option value="Hyderabad"/>
                        <option value="Amravati"/>
                        <option value="Kolkata"/>
                        <option value="Nagpur"/>
                        <option value="Delhi"/>
                        <option value="Kolhapur"/>
                        </datalist>
                        </div>
                       

                        <div className="mb-3">
                        <label className="label-control">Departure</label>
                        <input onChange={(e)=>{
                            setDeparture(e.target.value)
                        }}  type="text" className="form-control" placeholder='hh:mm:ss(24 hr format)' />
                        </div>

                        <div className="mb-3">
                        <label className="label-control">Destination</label>
                        <input onChange={(e)=>{
                            setDestination(e.target.value)
                        }} list="datalistOptions" type="text" className="form-control" />
                        <datalist id="datalistOptions">
                        <option value="Mumbai"/>
                        <option value="Pune"/>
                        <option value="Hyderabad"/>
                        <option value="Amravati"/>
                        <option value="Kolkata"/>
                        <option value="Nagpur"/>
                        <option value="Delhi"/>
                        <option value="Kolhapur"/>
                        </datalist>
                        </div>
            
                    

                   
                
                    <div className="col">
                        <div className="mb-3">
                        <label className="label-control">Journey Duration</label>
                        <input onChange={(e)=>{
                            setJourneyDuration(e.target.value)
                        }} type="number" className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label className="label-control">arrivalAtDestination</label>
                        <input onChange={(e)=>{
                            setArrivalAtDestination(e.target.value)
                        }} type="text" className="form-control" placeholder='hh:mm:ss(24 hr format)'/>
                        </div>

                        <div className="mb-3">
                        <label className="label-control">availabilityOfSeats</label>
                        <input onChange={(e)=>{
                            setAvailabilityOfSeats(e.target.value)
                        }} type="number" className="form-control" />
                        </div>

            
                    </div>
                </div>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
                    <button onClick={addTrain} class="btn btn-primary" type="button">Add Train</button>
                </div>

        </div>

       </div>

       <div className="col"></div>

      
       </div> 
       <br/>
       <br/>


       </div>
    )
}

export default AddTrain