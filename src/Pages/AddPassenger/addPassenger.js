
import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import axios from "axios"
import { URL } from "../../config"
import { Route, Redirect } from "react-router"
import { useLocation } from "react-router"
import Header from "../../Components/HeaderComponent/Header"
import PassengerDetailsComponent from "../../Components/PassengerDetailsComponent/PassengerDetailsComponent"

const AddPassenger = () => {

    const { userId, trainNumber, journeyDate } = sessionStorage

    const navigate = useNavigate()

    const[firstname, setFirstName] = useState('')
    const[lastname, setLastName] = useState('')
    const[age, setAge] = useState('')
    const[gender, setGender] = useState('')

    const addPassenger = () => {
        if(firstname.length === 0){
            toast.warning("Please Enter First Name")
        }else if (lastname.length===0){
            toast.warning("Please Enter Last Name")
        }else if(age.length===0){
            toast.warning("Please Enter Age")
        }else if(gender.length===0){
            toast.warning("Please Enter Gender")
        }else{

            var passengers = JSON.parse(localStorage.getItem('passengers') || "[]")
            var length = passengers.length
            var passenger = {
                firstname,
                lastname,
                age,
                gender
            }
            passengers.push(passenger)
            localStorage.setItem('passengers', JSON.stringify(passengers))
            toast.success("Passenger Successfully Added")
            sessionStorage['count'] = length

        
            const body = {
                passengerFirstName : firstname,
                passengerLastName : lastname,
                passengerAge : age,
                passengerGender : gender, 
                journeyDate,
                trainNumber, 
                userId
            }

            const url = 'http://localhost:7070/passenger/add'
            axios.post(url, body).then((response)=>{

            })

            window.location.reload(false);
            
        }
        
    }
    const proceed = () => {
        if(firstname.length === 0){
            toast.warning("Please Enter First Name")
        }else if (lastname.length===0){
            toast.warning("Please Enter Last Name")
        }else if(age.length===0){
            toast.warning("Please Enter Age")
        }else if(gender.length===0){
            toast.warning("Please Enter Gender")
        }else{

            var passengers = JSON.parse(localStorage.getItem('passengers') || "[]")
            var length = passengers.length
            var passenger = {
                firstname,
                lastname,
                age,
                gender
            }
            passengers.push(passenger)
            localStorage.setItem('passengers', JSON.stringify(passengers))
            
            const body = {
                passengerFirstName : firstname,
                passengerLastName : lastname,
                passengerAge : age,
                passengerGender : gender, 
                journeyDate,
                trainNumber, 
                userId
            }

            const url = `${URL}/passenger/add`
            axios.post(url, body).then((response)=>{

            })

            navigate('/passengerDetails')
            sessionStorage['count']= length + 1
            console.log(sessionStorage['count'])
        }
    }


    return (
        <div>

        <div>
            <Header />
        </div>
 
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <div className='container signupblock'>
                <div className='heading'>
                    <h1 className='signupheading'>Add Passenger</h1> 
                </div>

                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                        <label className="label-control">First Name</label>
                        <input onChange={(e)=>{
                            setFirstName(e.target.value)
                        }} type="text" className="form-control" />
                        </div>

                        <div className="col">
                        <div className="mb-3">
                        <label className="label-control">Last Name</label>
                        <input onChange={(e)=>{
                            setLastName(e.target.value)
                        }} type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label className="label-control">Age</label>
                        <input onChange={(e)=>{
                            setAge(e.target.value)
                        }} type="number" className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label className="label-control">Gender</label>
                        <input onChange={(e)=>{
                            setGender(e.target.value)
                        }}  list='datalistoptions' type="text" className="form-control" />
                        <datalist id='datalistoptions'>
                            <option value="Male"></option>
                            <option value="Female"></option>
                        </datalist>
                        </div>
            
                    </div>
    
                    </div>
                </div>

                <div className="mb-3">
                    <button onClick={addPassenger} className="btn btn-primary">+ Add Passenger</button>
                    <button onClick={proceed} className="btn btn-primary float-end">Proceed</button>
                </div>
                </div>
            </div>
            <div className="col"></div>


        </div>

        </div>
    )
}

export default AddPassenger