import './PaymentDetails.css'
import Header from "../../Components/HeaderComponent/Header"
import { useNavigate } from 'react-router'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { URL } from '../../config'

const PaymentDetails = () => {

    const[ PNR , setPNR ] = useState('')

    const { firstName, trainFare, count, checkBox, userId, journeyDate, trainNumber, mealCount } = sessionStorage
    
    
    const navigate = useNavigate()
    


    function totalFare() {
        var total = Number(trainFare * count) + Number(49 * mealCount * checkBox) 
        return total
    }

    var totalCost = totalFare()
    sessionStorage['totalFare'] = totalCost
    

    const generateTicket = () => {
        const body = {
            userId, 
            passengerCount : count,
            fare : totalCost,
            trainNumber, 
            mealCount,
            dateOfTravelling : journeyDate      
        }

        const url = `${URL}/tickets/saveTicket`
        axios.post(url, body).then((response)=> {
            const result = response.data
            if(result['status']=='success'){
                navigate('/bookedTicket')
            }else{
                toast.error('Something went try again')
            }

           
        })

    }


    return (
        <div>
            <div>
                <Header/>
            </div>

        <div className="row">
            <div className="col-5"></div>
            <div className="col-6">
                <h1>
                    Hello {firstName}
                </h1>
            </div>
            </div>
            <div className="col-2"></div>
        




        <div className="row fareChart">
            <div className="col-2"></div>
            <div className="col-8">
            <div className="container">
            <table className="table">
                <thead>
                    <tr className='table-info'>
                    <th scope="col">#</th>
                    <th scope="col"><strong>Ticket Fare</strong></th>
                    <th scope="col"><strong>Meal Price</strong></th>
                    <th scope="col"><strong>Total Fare</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-light'>
                    <th scope="row">#</th>
                    <td><strong>{trainFare} * {count} INR</strong></td>
                    { checkBox == 1 &&
                        <td><strong>49 * {mealCount} INR</strong></td>
                    }
                    { checkBox == 0 && 
                        <td><strong>Null</strong></td>
                    }
                    
                    <td><strong>{totalCost} INR</strong></td>
                    </tr>
                </tbody>
                </table>    
        </div>
            </div>
            <div className="col-2"></div>
        </div>
<br/>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
            <div className='container'>
            <h1>Choose Mode of Payment</h1>
             </div>
            </div>
            <div className="col-2"></div>
        </div>
        
        
        
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">

            <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                    <strong>Internet Banking</strong>
                    </label>
                    </div>
                   
                    
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">


               <div> 
               <div> 
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>SBI</strong>
                    </label>
                    </div>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>HDFC</strong>
                    </label>
                    </div>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>AXIS</strong>
                    </label>
                    </div>
                    <br/>
                    <div className="mb-3">
                            <button onClick={generateTicket} className="btn btn-primary">Confirm Payment</button>
                </div>
                </div>
                </div>        
               
                
                </div>

                
                

            </div>   
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                    <strong>PhonePe/GooglePay/PayTm</strong>
                    </label>
                    </div>
                    
                    
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                    <strong>PhonePe</strong>
                    </label>
                    </div>


                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                    <strong>GooglePay</strong>
                    </label>
                    </div>


                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                    <strong>PayTm</strong>
                    </label>
                    </div>
                    <br/>
                    <div className="mb-3">
                            <button onClick={generateTicket} className="btn btn-primary">Confirm Payment</button>
                    </div>


                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                    <strong>Credit Card/ Debit Card</strong>
                    </label>
                    </div> 
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <div class="col-auto">
                    <div className="row">
                    <label class="visually-hidden">Password</label>
                    <input type="text" class="form-control cardInput" placeholder="16 Digit Card Number"/>
                    </div>

                    <div className="row">
                        <div className="col-2"> 
                        <input type="number" class="form-control dateInput" placeholder="Date"/> 
                        </div>
                        
                        <div className="col-1 slash"><strong>/</strong></div>
                        
                        <div className="col-2">
                        <input type="number" class="form-control yearInput" placeholder="Year"/> 
                        </div>
                        <div className="col-10"></div>
                    </div>
                    <div className="row">
                    <div className="col"> 
                        <input type="password" class="form-control cvvInput" placeholder="CVV"/>
                        </div>
                    </div>
                    <br/>
                    <div className="mb-3">
                            <button onClick={generateTicket} className="btn btn-primary">Confirm Payment</button>
                    </div>      
                        
                   
                    
                </div>
                </div>
                </div>
            </div>
            </div>
            
            
            <div className="col-2"></div>
        </div>
        
        
        
        
        
            
            
            
         
            </div>
 
    )
}

export default PaymentDetails