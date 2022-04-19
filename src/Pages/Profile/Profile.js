import './Profile.css'
import { useNavigate } from 'react-router'
import Header from '../../Components/HeaderComponent/Header'
const Profile = () => {

    const {  userId, firstName, lastName, age, gender, email , birthDate, phone, location, role }= sessionStorage

    const navigate = useNavigate()

    const gotoHome = () =>{
        navigate('/')
    }

    const gotoEdit = () =>{
        navigate('/edit')
    }
    

    return (

        <div>

            <div>
                <Header />
            </div>

        <div className="container">

            <div className="row">
            <div className="col"></div>
            
            
            <div className="col">
                <div className="myprofileheading">
                <h1 className='myprofileh1'>{firstName}'s Profile</h1>
                </div>
                <br />
                <br />


            <table className='table table-success table-striped'>
                <tbody>
                <tr>
                <div className="row">
                    <div className="col">FirstName</div>
                    <div className="col">:</div>
                    <div className="col">{firstName}</div>
                </div>
                </tr>
                <tr>
                <div className="row">
                    <div className="col">LastName</div>
                    <div className="col">:</div>
                    <div className="col">{lastName}</div>
                </div>
                </tr>
                <tr>
                <div className="row">
                    <div className="col">Age</div>
                    <div className="col">:</div>
                    <div className="col">{age}</div>
                </div>
                </tr>
                <tr>
                <div className="row">
                    <div className="col">Gender</div>
                    <div className="col">:</div>
                    <div className="col">{gender}</div>
                </div>
                </tr>
                <tr>
                <div className="row">
                    <div className="col">Phone</div>
                    <div className="col">:</div>
                    <div className="col">{phone}</div>
                </div>
                </tr>
                <tr>
                <div className="row">
                    <div className="col">Location</div>
                    <div className="col">:</div>
                    <div className="col">{location}</div>
                </div>
                </tr>
                <tr>
                <div className="row">
                    <div className="col">Email</div>
                    <div className="col">:</div>
                    <div className="col">{email}</div>
                </div>
                </tr>
                <tr>
                <div className="row">
                    <div className="col">BirthDate</div>
                    <div className="col">:</div>
                    <div className="col">{birthDate}</div>
                </div>
                <div className="row">
                    <div className="col">Role</div>
                    <div className="col">:</div>
                    <div className="col">{role}</div>
                </div>
                </tr>
                </tbody>
            </table>

            <div class="vstack gap-2 col-md-5 mx-auto">
                <button onClick={gotoEdit} type="button" class="btn btn-primary">Edit</button>
                <button onClick={gotoHome} type="button" class="btn btn-outline-primary">Back to Home</button>
            </div>

            </div>
        
            <div className="col"></div>
        </div>

        
        </div>
        </div>
    )
}

export default Profile