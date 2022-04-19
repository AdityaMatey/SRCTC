import { useNavigate } from "react-router"
import './Logout.css'
const Logout = () =>{

    const navigate = useNavigate()

    const gotoHome = () =>{
        navigate('/')
    }

    return (

        <div className="container">

        <div className="thanksgiving">
            <h1 className="thankyouheading">Thank You So Much</h1>
            <h2 className="visitagainheading">Visit Again</h2>
        </div>

        <br/>

        <div className="gotohomebutton">
        <div className="mb-3">
            <button onClick={gotoHome} className="btn btn-primary">Go to Home</button>
        </div>
        </div>

        </div> 
    )
}

export default Logout