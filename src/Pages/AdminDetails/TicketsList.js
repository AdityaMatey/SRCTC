import axios from "axios"
import { useState } from "react/cjs/react.development"
import Header from "../../Components/HeaderComponent/Header"
import '../Trains/Trains.css'
import TicketsListComponent from '../../Components/TicketsListComponent/TicketsListComponent'
import { toast } from "react-toastify"
import { URL } from "../../config"
const TicketsList = () => {

    const[trainNumber , setTrainNumber]= useState('')
    const[tickets , setTickets]= useState([])


    const getTicketsPerTrain = () => {
        const url = `${URL}/tickets/PNRbyTrainNumber/${trainNumber}`
        axios.get(url).then((response)=> {
            const result = response.data
            console.log(result)
            if(result['status']=='success'){
                setTickets(result['data'])
            }else{
                toast.error("No tickets available")
            }
        })
    }

    return (
        <div className="trains">
            <div>
                <Header/>
            </div>

            <div className="row">
        <div className="col"></div>
        <div className="col">
        <div className='container loginblock'>
            <div className='heading'>
                <h1 className='loginheading'>Get Bookings Per Train</h1>
            </div>
            <br />
            <br/>
            <div className="form">
                <div className="mb-3">
                    <label className="label-control"><h5>Enter TrainNumber</h5></label>
                    <input onChange={(e)=>{
                        setTrainNumber(e.target.value)
                    }} type="number" className="form-control" placeholder="Enter Train Number"/>
                </div>
                <br/>
                <div className="mb-3">
                    <button onClick={getTicketsPerTrain} className="btn btn-primary">GET Tickets</button>
                </div>
            </div>
        </div> 
        </div>
        <div className="col"></div>
    </div>



    <div class="container">
                <div class="row">
                    <div class="col-1">
                    <div class="p-2 border bg-light"><h5><strong>#</strong></h5></div>
                    </div>
                    <div class="col-1">
                    <div class="p-2 border bg-light"><strong>PNR</strong></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>Passenger Count</strong></div>
                    </div>
                    <div class="col-1">
                    <div class="p-2 border bg-light"><strong>UserId</strong> </div>
                    </div>
                    <div class="col-1">
                    <div class="p-2 border bg-light"><strong>Ticket Fare</strong></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>Journey Date</strong></div>
                    </div>
                </div>
            </div>



              <div>
              {tickets.map(ticket => {
                    return <TicketsListComponent ticket={ticket}/>
                })}
            </div>      



        </div>
    )
}

export default TicketsList