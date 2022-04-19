

const CancellationListComponent = (props) => {

    const { cancelledTicket } = props
    return (
        <div>

            <div class="container">
                <div class="row">
                    <div class="col-1">
                    <div class="p-2 border bg-light"><h5><strong>#</strong></h5></div>
                    </div>
                    <div class="col-2">
                    <div class="p-2 border bg-light"><strong>{cancelledTicket.pnr}</strong></div>
                    </div>
                    <div class="col-4">
                    <div class="p-2 border bg-light"><strong>{cancelledTicket.cancellationDate}</strong></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CancellationListComponent