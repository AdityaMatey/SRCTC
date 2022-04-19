import './TrainSearchBlock.css'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import TrainComponent from '../../Components/TrainsComponent/TrainComponent'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import {Link} from 'react-router-dom';

const TrainSearchBlock = () => {
    const navigate = useNavigate()

    const[source, setSource] = useState('')
    const[destination, setDestination] = useState('')
    const[date , setDate] = useState('')


     const searchTrains = () => {
        if(source.length === 0){
        toast.warning("Please Enter Source")
        }
        else if(destination.length === 0){
            toast.warning("Please Enter Destination")
        }else if(date.length ===0){
            toast.warning('Please Enter Date')
        }
        else{
                sessionStorage['source'] = source
                sessionStorage['destination'] = destination
                sessionStorage['journeyDate'] = date
                navigate('/desiredTrains', { state : {date}})
            }
        }  


    return (
           <div>
           

            <div className="row">
                <div className="col">
                <div className = 'trainsearchblockcard'>
                <h2 className='bookticketheading display-5'>BOOK TICKET</h2>

            <div className="row">
                <div className="col">
                    <div className='frominput'>
                    <input onChange={(e) => {
                        setSource(e.target.value)
                    }} class="form-control" list="datalistOptions" id="exampleDataList" placeholder="FROM"/>
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

                    <div className = 'toinput'>
                        <input onChange={(e)=> {
                            setDestination(e.target.value)
                        }} class="form-control" list="datalistOptions" id="exampleDataList" placeholder="TO"/>
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

                        <div className='dateinput'> 
                       <div className="mb-3">
                           <input onChange={(e)=>{
                               setDate(e.target.value)
                           }} type="date" className="form-control" placeholder='DATE'/>
                       </div>
                       </div>
                    
                    
                    
                    </div>
                    <div className='col'>

                    </div>

                 </div>   
    

                 <div class="vstack gap-2 col-md-5 mx-auto searchtrainbutton">
                 <button onClick={searchTrains} type="button" class="btn btn-primary searchtrainbutton">SEARCH TRAINS</button>
            </div>

                </div>
                </div>
               
               
                <div className="col">
                







                </div>
            </div>


            
           
            
           
    


</div>
    
    )
}

export default TrainSearchBlock