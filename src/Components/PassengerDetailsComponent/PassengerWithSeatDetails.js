import { useLocation } from "react-router"

const PassengerWithSeatDetails = (props) => {

   const { passenger  } = props

    console.log(passenger.passengerFirstName)
    return (
        <div>
            <div class="container">
                    <div class="row">
                        <div class="col-1">
                        <div class="p-2 border bg-light"><h5><strong>#</strong></h5></div>
                        </div>
                        <div class="col-1">
                        <div class="p-2 border bg-light"><strong>{passenger.passengerFirstName}</strong></div>
                        </div>
                        <div class="col-1">
                        <div class="p-2 border bg-light"><strong>{passenger.passengerLastName}</strong></div>
                        </div>
                        <div class="col-1">
                        <div class="p-2 border bg-light"><strong>{passenger.passengerAge} Yrs.</strong> </div>
                        </div>
                        <div class="col-1">
                        <div class="p-2 border bg-light"><strong>{passenger.passengerGender}</strong></div>
                        </div>
                        <div class="col-1">
                        <div class="p-2 border bg-light"><strong>S-{passenger.seat}</strong></div>
                        </div>
                        <div class="col-1">
                        <div class="p-2 border bg-light"><strong>{passenger.seatStatus}</strong></div>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default PassengerWithSeatDetails