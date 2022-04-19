
import { useLocation } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../HeaderComponent/Header";

const PaymentComponent = (props) => {
    


  const navigate = useNavigate();

  const { payment } = props;

  const [state, setState] = useState("");
  const [userToBeEdited,setUserToBeEdited]= useState()
  
 

  return (
<div>
     

        <div class="container">
                <div class="row">
                    <div class="col-1">
                    <div class="p-2 border bg-light"><h5><strong>#</strong></h5></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>{payment.transactionId}</strong></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>{payment.pnr}</strong></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>{payment.paymentDate} </strong> </div>
                    </div>
                    

                    
                </div>
            </div>

            

    </div>
)
  
}

export default PaymentComponent;