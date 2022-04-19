import './FinalPage.css'
import Header from "../../Components/HeaderComponent/Header"
import axios from "axios"
//import PassengerDetailsComponent from '../../Components/PassengerDetailsComponent/PassengerDetailsComponent'
import PassengerWithSeatDetails from '../../Components/PassengerDetailsComponent/PassengerWithSeatDetails'
import { URL } from '../../config'
import { Component } from 'react'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

const FinalPage = () => {
    
    const { userId, PNR, firstName, trainNumber, journeyDate , count, source, destination , totalFare} = sessionStorage
    const pnr = PNR

    const[passengers, setPassengers] = useState([])
   
   const getPassengers = () => {
       console.log("in GetPassenger")
       console.log(pnr)
    const url = `${URL}/passenger/passengersByPNR/${pnr}`
    axios.get(url).then((response)=>{
        const result = response.data
        console.log(result)
        if(result['status']=='success'){
            setPassengers(result['data'])
            console.log("out of GetPassenger")
           
        }
    })
}
       
useEffect(()=>{
    getPassengers()
}, [])


    
       
   
        
    //     function body (i) {
    //         passengerFirstName = passengers[i].firstname
    //         passengerLastName = passengers[i].lastname
    //         passengerAge = passengers[i].age
    //         passengerGender = passengers[i].gender
            

    //         const passBody = {
    //             passengerFirstName,
    //             passengerLastName,
    //             passengerAge,
    //             passengerGender,
    //             journeyDate,
    //             pnr,
    //             userId,
    //             trainNumber
    //         }

    //         const url = 'http://localhost:7070/passenger/add'
    //         axios.post(url, passBody).then((response)=>{

    //         })
    //     }
        
       
      
    // }

    // useEffect(()=>{
    //     FinalPage()
    // }, [])

  

    // const FinalPage = () => {
    //     for (let i = 0; i < count ; i++ ){
    //         passengerFirstName : passengers[i].firstname
    //        passengerLastName : passengers[i].lastname
    //         passengerAge : passengers[i].age
    //         passengerGender : passengers[i].gender
   
    //        const body = {
    //            passengerFirstName,
    //            passengerLastName,
    //            passengerAge,
    //            passengerGender,
    //            journeyDate,
    //            pnr,
    //            userId,
    //            trainNumber
    //        }
    //        console.log(passengerFirstName)
          
    //    }
    // }
    
    
    
    
    
    
    
    
    
    // {passengers.map(passenger => {
    //     const body = {
    //         passengerFirstName : passenger.firstname,
    //         passengerLastName : passenger.lastname,
    //         passengerAge : passenger.age,
    //         passengerGender : passenger.gender,
    //         journeyDate, 
    //         trainNumber,
    //         userId,
    //         pnr
    //     }

    //     const url = 'http://localhost:7070/passenger/add'
    //     axios.post(url, body).then((response)=> {
    //         const result = response.data
    //         if(result['status']=='success'){
    //             console.log("Passengers Added")
    //         }else {
    //             console.log("SOmethign went wrong")
    //         }
    //     })

    // })}






    return (
        <div>

            <div>
            <Header/>
            </div>

        <div className="container finalHeading">
        <h2 className='ticketBooking'>Ticket Booking<strong className="successful">  Successful</strong></h2>
        </div>   

                <div className="container reservationTicket">
                    <div className="row">

                    <div className="col-5">
                    <div>
                    <h1 className='float-start'>Hello {firstName}!!</h1>
                    </div>
                    </div>
                    <div className="col-5"></div>
                    <div>
                    <h1>PNR : {PNR}</h1>
                    </div>
                    </div>
                    
                        
                    
                    <br/>
                    <br/>
                    <div>
                        <h1 className='float-start'>Journey Details</h1>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Train Number</th>
                        <th scope="col">Source</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Journey Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">{trainNumber}</th>
                        <td><strong>{source}</strong></td>
                        <td><strong>{destination}</strong></td>
                        <td><strong>{journeyDate}</strong></td>
                        </tr>
                    </tbody>
                   </table>  

                    <br/>
                    <br/>
                    <div>
                        <h1 className='float-start'>Passenger Details</h1>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                   <table class="table">
                    <thead>
                        {/* <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Passenger Age</th>
                        <th scope="col">Gender</th>
                        </tr> */}
                    </thead>
                    
                    
                   </table>  
                  
                   {passengers.map(passenger => {
                        return <PassengerWithSeatDetails passenger={passenger}/>
                    })}

                    <br/>
                    <br/>
                    
                    <div>
                        <h1 className='float-start'>Fare Details</h1>
                        <hr/>
                    </div>

                    <button type="button" class="btn btn-primary btn-lg" disabled><strong>Total Fare : {totalFare} INR</strong> </button>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <hr/>
                  
                </div>

             
        </div>
    )
}

export default FinalPage