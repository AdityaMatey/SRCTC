import './Header.css'
import pic from '../../Images/trainlogormbg.png'
import backgroundimage from '../../Images/train.png'
import { useNavigate } from 'react-router'
import TrainSearchBlock from '../TrainSearchComponent/TrainSearchBlock'
const Header = () => {

    const { firstName, userId, loginStatus, role } = sessionStorage

    const navigate = useNavigate()

    const gotoLogin =() =>{
        navigate('/login')
    }

    const gotoSignup =() =>{
        navigate('/signup')
    }

    const gotoTrains = () =>{
        navigate('/trains')
    }

    const gotoHome = () =>{
        navigate('/')
    }

    const gotoProfile = () =>{
        navigate('/profile')
    }

    const registeredUsersList = () =>{
        navigate('/registeredUsers')
    }

    const fetchPassengers = () => {
        navigate('/fetchPassengers')
    }

    const ticketsList = () => {
        navigate('/ticketsList')
    }

    const cancellationHistory = () => {
        navigate('/cancellationHistory')
    }

    const paymentHistory =()=>{
        navigate('/paymentHistory')
    }

    const logoutUser= () =>{
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('firstName')
        sessionStorage.removeItem('role')
        sessionStorage.removeItem('lastName')
        sessionStorage.removeItem('birthDate')
        sessionStorage.removeItem("age")
        sessionStorage.removeItem('gender')
        sessionStorage.removeItem('phone')
        sessionStorage.removeItem('location')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('loginStatus')
        sessionStorage.removeItem('source')
        sessionStorage.removeItem('destination')
        sessionStorage.removeItem('count')
        sessionStorage.removeItem('journeyDate')
        sessionStorage.removeItem('passengerCount')
        sessionStorage.removeItem('trainNumber')
        sessionStorage.removeItem('trainFare')
        sessionStorage.removeItem('checkBox')
        sessionStorage.removeItem('PNR')
        sessionStorage.removeItem('totalFare')
        sessionStorage.removeItem('mealCount')
        sessionStorage.removeItem('testpnr')
        localStorage.clear()

        navigate('/logout')
    }


    return(
        <div>

            <div className="homecard">

                <div className="row">
                    <div className="col-1">
                        <img className='trainlogo' src={pic} height={175}/>
                    </div>
                    <div className="col-11">
                        <h1 className="display-3">SRCTC</h1>
                        <h5 className='srctclongform'>Sunbeam Railway Catering and Tourism Corporation</h5>

                        <div className="row navbar">
                            <div className="col">
                            <div className="row">
                                    <div className="col">
                                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button onClick={gotoHome} class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="false">Home</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button onClick={gotoLogin} class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Login</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button onClick={gotoSignup} class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">SignUp</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button onClick={gotoTrains} class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Trains</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">About Us</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact Us</button>
                                            </li> 
                                            </ul>
        
                                    </div>


                                   


                                    <div className="col">
                                    <div className="col">
                                            <div className="btn-group welcomebutton" role="group" aria-label="Button group with nested dropdown">
                                            <button type="button" className="btn btn-primary">Welcome</button>
                                            { userId && (
                                            <div className="btn-group" role="group">
                                                <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                {firstName}
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                <li><button onClick={gotoProfile} className="dropdown-item" href="/profile">Profile</button></li>
                                                <li><button onClick={logoutUser} className="dropdown-item" href="/logout">Logout</button></li>
                                                { role == 'admin' && (
                                                <div>
                                                <li><button onClick={registeredUsersList} className="dropdown-item" href="/logout">List of Registered Users</button></li>
                                                <li><button onClick={ticketsList} className="dropdown-item" href="/logout">List of Tickets Booked</button></li>        
                                                <li><button onClick={cancellationHistory} className="dropdown-item" href="/logout">Cancellation History</button></li>
                                                <li><button onClick={paymentHistory} className="dropdown-item" href="/logout">Payment History</button></li>                         
                                                </div> )}
                                                </ul>
                                            </div>)}  
                                            </div>
                                    </div>              
                            </div>
                            </div>
                        </div>
                    </div>

            </div>

        </div>
        </div>
        </div>

    )
}

export default Header