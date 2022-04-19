import './EditProfile.css'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { URL } from '../../config'
import axios from 'axios'

const EditProfile = () =>{

    const { userId, firstName, lastName,  role , email }= sessionStorage

    const[firstname, setFirstName] = useState('')
    const[lastname, setLastName]= useState('')
    const[age, setAge]= useState('')
    const[gender, setGender] = useState('')
    const[birthDate, setBirthDate]= useState('')
    const[phone, setPhone] = useState('')
    const[location, setLocation]= useState('')


    const navigate = useNavigate()


    const saveChanges = () =>{  
        if(firstname.length ===0){
            toast.warning('Please Enter Firstname')
        }else if(lastname.length===0){
            toast.warning('Please Enter Lastname')
        }else if(age.length===0){
            toast.warning("Please Enter Age")
        }else if(gender.length===0){
            toast.warning("Please Enter Gender")
        }else if(birthDate.length===0){
            toast.warning("Please enter BirthDate")
        }else if(phone.length===0){
            toast.warning("Please Enter Phone")
        }else{
            const body = {
                firstname,
                lastname,
                age,
                gender,
                birthDate,
                phone,
                location
            }
            
            const url = `${URL}/user/update/${userId}`
            axios.put(url, body).then((response)=>{
                const result = response.data
                if(result['status']=='success'){
                    sessionStorage['firstName'] = firstname
                    sessionStorage['lastName'] = lastname
                    sessionStorage['age'] = age
                    sessionStorage['location'] = location
                    sessionStorage['birthDate'] = birthDate
                    sessionStorage['gender'] = gender
                    sessionStorage['phone'] = phone
                    toast.success("Changes Saved Successfully")
                    navigate('/')
                }else{
                    toast.error(result['error'])
                }
            })
        }
        
    }

    const gotoHome = () => {
        navigate('/')
    }


    return (
        <div className="container">
        
            <div>
                <h1 className='srctcheading'>SRCTC</h1>
            </div> 


            <div className="row">
                <div className="col"></div>
                
                <div className="col">
                    <div className="editheading">
                    <h1 className='editdetailsh1'>Edit Details</h1>
                    </div>
                <br />
                <br />
                <table className='table table-success table-striped'>
                <tbody>
                <tr>
                <div className="row">
                    <div className="col">FirstName</div>
                    <div className="col">:</div>
                    <div className="col"><input onChange={(e)=>{
                        setFirstName(e.target.value)
                    }} type="text" className="form-control"/></div>
                </div>
                </tr>
                <tr>
                <div className="row">
                    <div className="col">LastName</div>
                    <div className="col">:</div>
                    <div className="col"><input onChange={(e)=>{
                        setLastName(e.target.value)
                    }} type="text" className="form-control" /></div>
                </div>
                </tr>
                <tr>
                <div className="row">
                    <div className="col">Age</div>
                    <div className="col">:</div>
                    <div className="col"><input onChange={(e)=>{
                        setAge(e.target.value)
                    }} type="number" className="form-control" /></div>
                </div>
                </tr>
                <tr>
                <div className="row">
                    <div className="col">Gender</div>
                    <div className="col">:</div>
                    <div className="col"><input onChange={(e)=>{
                        setGender(e.target.value)
                    }} list = 'datalistoptions' type="text" className="form-control"  /></div>
                    <datalist id ='datalistoptions'>
                            <option value="Male"></option>
                            <option value="Female"></option>
                    </datalist>
                </div>
                </tr>
                <tr>
                <div className="row">
                    <div className="col">Phone</div>
                    <div className="col">:</div>
                    <div className="col"><input onChange={(e)=>{
                        setPhone(e.target.value)
                    }} type="number" className="form-control" /></div>
                </div>
                </tr>
                <tr>
                <div className="row">
                    <div className="col">Location</div>
                    <div className="col">:</div>
                    <div className="col"><input onChange={(e)=>{
                        setLocation(e.target.value)
                    }} type="text" className="form-control"/></div>
                </div>
                </tr>
                <tr>
                <div className="row">
                    <div className="col">BirthDate</div>
                    <div className="col">:</div>
                    <div className="col"><input onChange={(e)=>{
                        setBirthDate(e.target.value)
                    }} type="date" className="form-control" /></div>
                </div>
                </tr>
                </tbody>
            </table>

            <div class="vstack gap-2 col-md-5 mx-auto">
                <button onClick={saveChanges} type="button" class="btn btn-primary">Save Changes</button>
                <button onClick={gotoHome} type="button" class="btn btn-outline-primary">Back to Home</button>
            </div>

            
                
                </div>
                
                <div className="col"></div>
            </div>

        
        
        </div>
    )
}

export default EditProfile