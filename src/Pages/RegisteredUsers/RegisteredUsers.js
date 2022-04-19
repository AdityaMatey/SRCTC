import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import UserComponent from "../../Components/UserComponent/UserComponent"
import { toast } from "react-toastify"
import Header from "../../Components/HeaderComponent/Header"
import { useEffect } from "react/cjs/react.development"
import { URL } from "../../config"

const RegisteredUsers = () => {

    const navigate = useNavigate()

    const[users, setUsers] = useState([])

    const searchUsers = () => {
    const url = `${URL}/user/`
    axios.get(url).then((response)=> {
        const result = response.data
        if(result['status']=='success'){
            setUsers(result['data'])
        }else{
            toast.error("No users Listed")
            navigate('/')
        }
    })
}

    useEffect(()=> {
        searchUsers()
    }, [])

    return (
        <div>

            <div>
                <Header/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <h1>Users List</h1>
                    </div>
                    <div className="col"></div>
                </div>

            <br/>
            <br/>
            <div>
            {users.map(user => {
                return <UserComponent user={user}/>
            })}
            </div>




            </div>

        </div>
    )
}

export default RegisteredUsers