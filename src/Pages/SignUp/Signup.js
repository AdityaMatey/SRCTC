import './SignUp.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Header from '../../Components/HeaderComponent/Header'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config' 

const Signup = () =>{

    const[firstname, setFirstName] = useState('')
    const[lastname, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[gender, setGender] = useState('')
    const[age, setAge] = useState('')

    const navigate = useNavigate()

    const signupUser = () =>{
        if(firstname.length === 0){
            toast.warning("Please Enter First Name");
        }else if (lastname.length === 0){
            toast.warning("Please Enter Last Name")
        }else if (email.length ===0){
            toast.warning("Please Enter email")
        }else if (password.length ===0){
            toast.warning("Please Enter Password")
        }else if(confirmPassword.length ===0){
            toast.warning("Please Enter Confirm Password")
        }else if(confirmPassword !== password){
            toast.error("Password does not match")
        }else if (age.length ===0){
            toast.warning("Please enter Age")
        }else if (age <= 12){
            toast.error("Age must be more than 12")
        }else if (gender.length ===0){
            toast.warning("Please enter gender")
        }else{
            const body = {
                firstname, 
                lastname,
                email,
                password,
                gender,
                age,
               
            }
            
            const url = `${URL}/user/signup`
            axios.post(url, body).then(response => {
                const result = response.data
                if(result['status']==='success'){
                    toast.success("User added Successfully")
                    navigate('/login')
                }else{
                    toast.error(result['error'])
                }
            })

        }
    }

    

    return (
        <div className='SignUp'>

        <div>
            <Header />
        </div>
 
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <div className='container signupblock'>
                <div className='heading'>
                    <h1 className='signupheading'>SignUp</h1> 
                </div>

                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                        <label className="label-control">First Name</label>
                        <input onChange={(e)=>{
                            setFirstName(e.target.value)
                        }} type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label className="label-control">Email</label>
                        <input onChange={(e)=>{
                            setEmail(e.target.value)
                        }} type="email" className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label className="label-control">Confirm Password</label>
                        <input onChange={(e)=>{
                            setConfirmPassword(e.target.value)
                        }} type="password" className="form-control" />
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
                
                    <div className="col">
                        <div className="mb-3">
                        <label className="label-control">Last Name</label>
                        <input onChange={(e)=>{
                            setLastName(e.target.value)
                        }} type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label className="label-control">Password</label>
                        <input onChange={(e)=>{
                            setPassword(e.target.value)
                        }} type="password" className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label className="label-control">Age</label>
                        <input onChange={(e)=>{
                            setAge(e.target.value)
                        }} type="number" className="form-control" />
                        </div>

            
                    </div>
                </div>

    

                <div>
                    Already have an account?<Link to= '/login' className='text-body'> Sign In</Link> here
                </div>

                <div className="mb-3">
                    <button onClick={signupUser} className="btn btn-primary">SignUp</button>
                </div>
                </div>
            </div>
            <div className="col"></div>
        </div>
        

        

        </div>
    )
}

export default Signup