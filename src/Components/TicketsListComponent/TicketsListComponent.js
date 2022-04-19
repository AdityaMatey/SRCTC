const TicketsListComponent = (props) => {

    const { ticket } = props

    console.log(ticket.pnr)

    return (
        <div>

    
        <div class="container">
                <div class="row">
                    <div class="col-1">
                    <div class="p-2 border bg-light"><h5><strong>#</strong></h5></div>
                    </div>
                    <div class="col-1">
                    <div class="p-2 border bg-light"><strong>{ticket.pnr}</strong></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>{ticket.passengerCount}</strong></div>
                    </div>
                    <div class="col-1">
                    <div class="p-2 border bg-light"><strong>{ticket.userId}</strong> </div>
                    </div>
                    <div class="col-1">
                    <div class="p-2 border bg-light"><strong>{ticket.fare}</strong></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>{ticket.dateOfTravelling}</strong></div>
                    </div>
                </div>
            </div>

    </div>
    )
}

export default TicketsListComponent