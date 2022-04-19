import axios from "axios"
import { toast } from "react-toastify"
import { useEffect, useState } from "react/cjs/react.development"
import CancellationListComponent from "../../Components/TicketsListComponent/CancellationListComponent"
import Header from "../../Components/HeaderComponent/Header"
import { URL } from "../../config"

const CancellationList = () => {

    const[cancelledTickets, setCancelledTickets] = useState([])
    
    const getCancelledList = () => {
    const url = `${URL}/cancellations/all`
    axios.get(url).then((response)=>{
        const result = response.data
        console.log(result)
        if(result['status']=='success'){
           setCancelledTickets(result['data'])
        }
    })
}

useEffect(()=>{
    getCancelledList()
}, [])



    return (
        <div>
            
            <div>
                <Header/>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-1">
                    <div class="p-2 border bg-light"><h5><strong>#</strong></h5></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>PNR</strong></div>
                    </div>
                    <div class="col-4">
                    <div class="p-2 border bg-light"><strong>Cancellation Date</strong></div>
                    </div>
                </div>
            </div>


            <div>
              {cancelledTickets.map(cancelledTicket => {
                    return <CancellationListComponent cancelledTicket={cancelledTicket}/>
                })}
            </div>      


        </div>
    )
}

export default CancellationList