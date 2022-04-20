import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { URL } from '../../config'
import './TrainComponent.css'
const TrainComponent = (props) => {
    const navigate = useNavigate()
    const { userId, role, loginStatus } = sessionStorage
    const { train } = props
    const state = useLocation()
    const date = state.date


    const addPassenger = () => {
        sessionStorage['trainNumber'] = train.trainNumber
        sessionStorage['trainFare'] = train.trainFare
        navigate('/addPassenger')
    }

    const signinUser = () => {
        navigate('/login')
    }

    const deleteTrain = () => {
        const trainNumber = train.trainNumber
        const url = `${URL}/trains/delete/${trainNumber}`
        axios.delete(url).then((response)=>{
            const result = response.data
            if(result['status']=='success'){
                toast.success("Train Deleted Successfully")
                navigate('/')
            }else{
                toast.error("Ooppss!! Somethign went Wrong")
            }
        })
    }

    const editTrain = () =>{
        sessionStorage['trainNumber'] = train.trainNumber
        navigate('/editTrain')
    }

    return (
        <div>

            <div class="card">
                <h5 class="card-header">{train.trainName} ({train.trainNumber})</h5>
                <div class="card-body">
                    <div className="row">
                        <div className="col-5">
                        <h5 class="card-title"><b>{train.source} | {train.departure}</b></h5>
                        </div>
                        {/* <div className="col">  
                        </div> */}
                        <div className="col">
                        <b>-- {train.journeyDuration} hrs --</b>
                        </div>
                        {/* <div className="col">
                        </div> */}
                        <div className="col-2">
                        <h5 class="card-title"><b>{train.destination} | {train.arrivalAtDestination}</b></h5>
                        </div>
                        </div>
                      <br/>  

                        <div className="row">
                            <div className="col-5 text-align:center"><strong>Ticket Fare : {train.trainFare} INR</strong></div>
                            <div className="col"><b>Seats --- {train.availabilityOfSeats}</b></div>
                        </div>

                        <div className="row">
                            <div className="col">
                            { loginStatus != 1 && (
                                <div onClick={signinUser} className="row bookButton"><button href="#" class="btn btn-primary">Please Login To Book</button></div>
                            )
                            }
                            { userId && (
                                <div onClick={addPassenger} className="row bookButton"><button href="#" class="btn btn-primary">Book</button></div>
                            )}
                            </div>
                            <div className="col">
                            { role == "admin" && (
                            <div onClick={editTrain} className="row updateButton"> <button className="btn btn-warning float-end">Edit</button></div>    
                            )}
                            </div>
                            <div className="col">
                            { role == "admin" && (
                            <div className="row deleteButton"> <button onClick={deleteTrain} className="btn btn-danger float-end">Delete</button></div>  
                            )}
                            </div>
                        </div>
                        
                        <div className="col">
 
                        </div>

                    
                </div>
            </div>
            <br />
        </div>
    )
}

export default TrainComponent