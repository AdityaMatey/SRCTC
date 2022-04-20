import axios from "axios"
import { toast } from "react-toastify"
import { useState } from "react/cjs/react.development"
import Header from "../../Components/HeaderComponent/Header"
import PassengerDetailsComponent from "../../Components/PassengerDetailsComponent/PassengerDetailsComponent"
import PassengerWithSeatDetails from "../../Components/PassengerDetailsComponent/PassengerWithSeatDetails"
import './FetchByPnr.css'
import { URL } from "../../config"


const FetchByPnr = () => {

    const[pnr, setPnr] = useState('')
    const[passengers, setPassengersByPnr]= useState([])
    const[getStatusCheck , setGetStatusCheck] = useState(0)
 
   
   
   

    const PnrDetails = () => {
        sessionStorage['testpnr'] = pnr
        if(getStatusCheck == 0 ){
            setGetStatusCheck(1)
        }else if(pnr){
            setGetStatusCheck(1)
        }else{
            setGetStatusCheck(0)
        }
        console.log(getStatusCheck)
        const url = `${URL}/passenger/passengersByPNR/${pnr}`
        axios.get(url).then((response)=>{
            console.log(pnr)
            const result = response.data
            if(result['status']=='success'){
                setPassengersByPnr(result['data'])
            }
        })
       
    }


    const cancelTicket = () => {
        var cancellationDate = new Date().toISOString().replace(/T.*/,'').split('-').join('-')
        //var cancellationDate = today.toLocaleDateString()
        console.log(cancellationDate)
        var pnr  = sessionStorage['testpnr']
        console.log(pnr)
        
        const body = {
            pnr,
            cancellationDate
        }
        const url3 = `${URL}/cancellation`
        axios.post(url3, body).then((response)=>{
            const result = response.data
            console.log(result)
            if(result['status']=='success'){
            }
  
        const url1 = `${URL}/tickets/deleteTicket/${pnr}`
        axios.delete(url1).then((response)=>{
            const result = response.data
            console.log(result)
            
            const url2 = `${URL}/passenger/deleteByPnr/${pnr}`
            axios.delete(url2).then((response)=>{
                const result1 = response.data
                console.log(result);
                toast.success("Ticket successfully Cancelled")
                window.location.reload(false);

            })
            })
        })

       
    }


    return (
        <div className="bypnrbackground">
        <div>
            <Header/>
        </div>

        <div className="row">
        <div className="col"></div>
        <div className="col">
        <div className='container loginblock'>
            <div className='heading'>
                <h1 className='loginheading'>Search By PNR</h1>
            </div>
            <br />
            <br/>
            <div className="form">
                <div className="mb-3">
                    <label className="label-control"><h5>Enter PNR</h5></label>
                    <input onChange={(e)=>{
                        setPnr(e.target.value)
                    }} type="number" className="form-control" />
                </div>
                <br/>
                <div className="mb-3">
                    <button onClick={PnrDetails} className="btn btn-primary">GET STATUS</button>
                </div>
            </div>
        </div> 
        </div>
        <div className="col"></div>
    </div>


    { getStatusCheck == 1 && (
    <div>
    {passengers.map(passenger => {
                return <PassengerWithSeatDetails passenger={passenger}/>
    })}

    </div>
    
    )}

    { getStatusCheck == 1 && (
    <div className="mb-3">
    <button onClick={cancelTicket} className="btn btn-danger cancelButton">CANCEL TICKET</button>
    </div>
    )}  

    


    </div>

    )
}
export default FetchByPnr