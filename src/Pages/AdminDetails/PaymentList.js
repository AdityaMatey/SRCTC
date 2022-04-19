import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../config";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import Header from "../../Components/HeaderComponent/Header";
import PaymentComponent from "../../Components/TicketsListComponent/PaymentComponent";


const PaymentList = () => {
    

    const [payments, setPayments]= useState([]);


    const searchPayment = () => {
        const url = `${URL}/payments/all`
        axios.get(url).then((response) => {
          const result = response.data;
          console.log(result)
          if (result["status"] == "success") {
            setPayments(result["data"]);
          } else {
            toast.error(result["error"]);
            
          }
        })
      }
    
      useEffect(() => {
        searchPayment();
       
      }, []);



    return (<div>

                <div>
                    <Header/>
                </div>
                    
      <br>
      </br>

                    <div className="row" style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <div class="col-1">
                    <div class="p-2 border bg-light"><h5><strong>#</strong></h5></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>TransactionID</strong></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>PNR No.</strong></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>Payment Date</strong> </div>
                    </div>
                    

                    
                </div>


        <div className="row" style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div className="col">
          {payments.map((payment) => {
            return <PaymentComponent payment={payment} />;
          })}
        </div>
      </div>

    </div>)
}

export default PaymentList;