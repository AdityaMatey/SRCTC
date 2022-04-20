import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../config";
import Header from "../../Components/HeaderComponent/Header";

const EditTrain = () => {

  const { trainNumber } = sessionStorage
  const [trainName, setTrainName] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrivalAtDestination, setArrivalAtDestination] = useState("");
  const [availabilityOfSeats, setAvailabilityOfSeats] = useState("");
  const [journeyDuration, setJourneyDuration] = useState("");
  const navigate = useNavigate();


  const editTrain = () => {
    if (trainName.length === 0) {
      toast.warning("Please Enter Train Name");
    } else if (source.length === 0) {
      toast.warning("Please Source");
    } else if (destination.length === 0) {
      toast.warning("Please Destination");
    } else if (departure.length === 0) {
      toast.warning("Please Arrival tie");
    } else if (arrivalAtDestination.length === 0) {
      toast.warning("Please Arrival tie");
    } else if (availabilityOfSeats.length === 0) {
      toast.warning("Please enter availability Of Seats");
    } else if (journeyDuration.length === 0) {
      toast.warning("Please enter Journey Duration");
    } else {
      const body = {
        trainName,
        source,
        destination,
        departure,
        arrivalAtDestination,
        availabilityOfSeats,
        journeyDuration,
      };

      const url = `${URL}/trains/update/${trainNumber}`;
      axios.put(url, body).then((response) => {
        const result = response.data;
        if (result["status"] == "success") {
          toast.success("successfully updated Train..");
          navigate("/");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <div>


        <div>
          <Header/>
        </div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="container signupblock">
            <div className="heading">
              <h1 className="signupheading">Update Train</h1>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label className="label-control">Train Name</label>
                  <input
                    onChange={(e) => {
                      setTrainName(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="col">
                  <div className="mb-3">
                    <label className="label-control">Source</label>
                    <input
                      onChange={(e) => {
                        setSource(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="label-control">Destination</label>
                    <input
                      onChange={(e) => {
                        setDestination(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="label-control">Departure</label>
                    <input
                      onChange={(e) => {
                        setDeparture(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="label-control">
                      {" "}
                      Arrival Time At Destination
                    </label>
                    <input
                      onChange={(e) => {
                        setArrivalAtDestination(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="label-control">
                      {" "}
                      availability Of Seats
                    </label>
                    <input
                      onChange={(e) => {
                        setAvailabilityOfSeats(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="label-control"> Journey Duration</label>
                    <input
                      onChange={(e) => {
                        setJourneyDuration(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <button onClick={editTrain} className="btn btn-primary">
                Edit Train
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
export default EditTrain;