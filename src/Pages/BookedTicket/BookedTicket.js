import axios from "axios"
import Header from "../../Components/HeaderComponent/Header"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import { URL } from "../../config"

const BookedTicket = () => {

    const { PNR, journeyDate } = sessionStorage

    const navigate = useNavigate()

    const url2 = `${URL}/tickets/latestPNR`
        axios.get(url2).then((response)=> {
            const result = response.data
            console.log(result)
            if(result['status']=='success'){
                var testPNR = result['data']
                sessionStorage['PNR']= testPNR
                const body = {
                    pnr : testPNR
                }
                const url = `${URL}/passenger/updatePnr`
                axios.put(url, body).then((response)=>{
            const result = response.data
            if(result['status']=='success'){
                var paymentDate = new Date().toISOString().replace(/T.*/,'').split('-').join('-')
                console.log(paymentDate)
                var pnr = sessionStorage['PNR']
                    const body1 = {
                        pnr,
                        paymentDate
    
                    }
                    const url3 = `${URL}/payment/addpayment`
                    axios.post(url3, body1).then((response)=>{
                        const result = response.data
                        console.log(result)
                    })
            }  

           
                
        })   
        navigate('/finalPage')
        }
    })


        

        
        // const body = {
        //     pnr
        // }
        // console.log(pnr)
        // const url = 'http://localhost:7070/passenger/updatePnr'
        // axios.put(url, body).then((response)=>{
        //     const result = response.data
        //     if(result['status']=='success'){
        //         toast.success("Eurekaaaa!!!")
        //     }
        // })
        


    // console.log(passengerFirstName)    
    
    return (
        <div>
            <Header/>
        </div>
    )
}

export default BookedTicket