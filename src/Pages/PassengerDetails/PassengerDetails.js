import './PassengerDetails.css'
import { useLocation, useNavigate } from "react-router"
import Header from "../../Components/HeaderComponent/Header"
import PassengerDetailsComponent from '../../Components/PassengerDetailsComponent/PassengerDetailsComponent'
import { useEffect } from 'react/cjs/react.production.min'
import { useState } from 'react/cjs/react.development'



const PassengerDetails = () => {
    var checkBox = 0

    const[mealCount, setMealCount]= useState('')
    sessionStorage['mealCount']= mealCount

    const boxChecked = () => {
        if(checkBox == 0)
        {
            checkBox = 1
            sessionStorage['checkBox']=checkBox
        }
        else if(checkBox==1){
            checkBox=0
            sessionStorage['checkBox']=checkBox
        }
    }


    const navigate = useNavigate()
    var passengers = JSON.parse(localStorage.getItem('passengers'))

    return (
       <div className='thali'>
           
            <div>
                <Header/>
            </div>

            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="container pdetailsHeading ">
                    <h2>Passenger Details</h2>
                    </div>
                </div>
                <div className="col"></div>
            </div>

            
            <div className="row">
                <div className="col-2"></div>
                <div className="col">   
                {passengers.map(passenger => {
                    return <PassengerDetailsComponent passenger={passenger}/>
                })}
                </div>   
            </div>
                <div className="col-2"></div>



                <div className="row">
                    <div className="col"></div>
                    <div className="col-6">
                    <div className="accordion mealBox" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <div class="form-check">
                    <input onChange={boxChecked} onC class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Choose our Exclusive Meal only for <strong>Rs 49/-</strong>
                    </label>
                    </div>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <strong>SRCTC is offering you Authentic Veg Desi Thali.</strong> <br/>(It contains 4 Chapatis, 1 Mix-Veg, 1 Dal-Tadka, 1 Bowl Rice, 2 pcs of GulabJamun) 
                    </div>

                    <div className="container">
                    <input onChange={(e)=>{
                        setMealCount(e.target.value)
                    }} type="number" name="" id="" placeholder='Meal Count'/>
                    <br/>
                   </div>
                    
                   
                   
                    <div>
                    <img src="" class="rounded float-end" alt="Veg Thali"></img>
                    </div>
                    
                    
                    </div>
                    
                </div>

                
                
                <div class="d-grid gap-2 col-6 mx-auto payButton">
                    <button onClick={()=>{
                        navigate('/paymentDetails')
                    }} class="btn btn-primary" type="button">Proceed To Pay</button>
                </div>
                </div>   
                    </div>
                    <div className="col"></div>
                </div>
            


                 
    
    
    
    
    </div> 
    )
}

export default PassengerDetails