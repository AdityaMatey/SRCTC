import axios from "axios"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { useEffect } from "react/cjs/react.development"
import { URL } from "../../config"

const UserComponent = (props) => {

    const { user } =  props

    const navigate = useNavigate()

    const deleteUser = () => {
        const userId = user.userId
        const url = `${URL}/user/delete/${userId}`
        axios.delete(url).then((response)=>{
            const result = response.data
            if(result['status']=='success'){
                toast.success("User Deleted Successfully")
                window.location.reload(false);
            }else{
                toast.error("Ooppss!! Somethign went Wrong")
            }
        })
    }


    return (
        <div>


        <div className="row">
            <div className="col">
            <div class="container">
                <div class="row">
                    <div class="col-1">
                    <div class="p-2 border bg-light"><h5><strong>#</strong></h5></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>{user.firstName}</strong></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>{user.lastName}</strong></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>{user.age} Yrs.</strong> </div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>{user.gender} </strong></div>
                    </div>

                    <div class="col-2">
                    <button onClick={deleteUser} className="btn btn-danger float-end">Delete</button>
                    </div>
                    
                    
                    
                </div>
            </div>
            </div>
            
        </div>
        


        </div>
    )
}

export default UserComponent