const PassengerTicketDetails = (props) => {
    
   const { passenger } = props
    
    return (
        <div>
            
            <table class="table">
                    <thead>
                        <tr>
                        <th scope="col" className="firstname">#</th>
                        <th scope="col" className="firstname">{passenger.firstname}</th>
                        <th scope="col" className="lastname">{passenger.lastname}</th>
                        <th scope="col" className="age">{passenger.age} yrs.</th>
                        <th scope="col" className="gender">{passenger.gender}</th>
                        </tr>
                    </thead>
             </table>       
        </div>
    )
}

export default PassengerTicketDetails