import { useLocation } from "react-router"

const PassengerDetailsComponent = (props) => {

   const { passenger  } = props
    console.log(passenger.firstname)

    return (
        <div>
            <div class="container">
                    <div class="row">
                        <div class="col-1">
                        <div class="p-2 border bg-light"><h5><strong>#</strong></h5></div>
                        </div>
                        <div class="col-2">
                        <div class="p-2 border bg-light"><strong>{passenger.firstname}</strong></div>
                        </div>
                        <div class="col-2">
                        <div class="p-2 border bg-light"><strong>{passenger.lastname}</strong></div>
                        </div>
                        <div class="col-2">
                        <div class="p-2 border bg-light"><strong>{passenger.age} Yrs.</strong> </div>
                        </div>
                        <div class="col-2">
                        <div class="p-2 border bg-light"><strong>{passenger.gender}</strong></div>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default PassengerDetailsComponent