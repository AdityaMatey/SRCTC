
import Login from './Pages/Login/Login'
import Signup  from './Pages/SignUp/Signup';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home'
import Header from './Components/HeaderComponent/Header';
import Trains from './Pages/Trains/Trains';
import DesiredTrains from './Pages/Trains/DesiredTrains';
import Logout from './Pages/Logout/Logout'; 
import EditProfile from './Pages/EditProfile/EditProfile';
import AddPassenger from './Pages/AddPassenger/addPassenger';
import PassengerDetails from './Pages/PassengerDetails/PassengerDetails';
import AddTrain from './Pages/Trains/AddTrain';
import PaymentDetails from './Pages/PaymentDetails/PaymentDetails';
import BookedTicket from './Pages/BookedTicket/BookedTicket';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import FinalPage from './Pages/BookedTicket/FinalPage';
import UserComponent from './Components/UserComponent/UserComponent';
import RegisteredUsers from './Pages/RegisteredUsers/RegisteredUsers';
import FetchPassenger from './Pages/FetchPassenger/FetchPassenger';
import FetchByPnr from './Pages/FetchPassenger/FetchByPnr';
import TicketsList from './Pages/AdminDetails/TicketsList';
import CancellationList from './Pages/AdminDetails/CancellationList';
import PaymentList from './Pages/AdminDetails/PaymentList';
import EditTrain from './Pages/UpdateTrain/EditTrain';


function App() {
  return (
    <div className='App'>
     

      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home />}/>
          <Route path = '/login' element = {<Login />}/>
          <Route path = '/signup' element = {<Signup />}/>
          <Route path = '/trains' element = {<Trains />}/>
          <Route path = '/profile' element = {<Profile />}/>
          <Route path = '/logout' element = {<Logout />}/>
          <Route path = '/edit' element = {<EditProfile />}/>
          <Route path = '/desiredTrains' element = {<DesiredTrains />}/>
          <Route path = '/addPassenger' element = {<AddPassenger />}/>
          <Route path = '/passengerDetails' element = {<PassengerDetails />}/>
          <Route path = '/addTrain' element = {<AddTrain />}/>
          <Route path = '/paymentDetails' element = {<PaymentDetails />}/>
          <Route path = '/bookedTicket' element = {<BookedTicket />}/>
          <Route path = '/finalPage' element = {<FinalPage />}/>
          <Route path = '/registeredUsers' element = {<RegisteredUsers />}/>
          <Route path = '/fetchPassengers' element = {<FetchPassenger />}/>
          <Route path = '/fetchbypnr' element = {<FetchByPnr />}/>
          <Route path = '/ticketsList' element = {<TicketsList />}/>
          <Route path = '/cancellationHistory' element = {<CancellationList />}/>
          <Route path = '/paymentHistory' element = {<PaymentList />}/>
          <Route path = '/editTrain' element = {<EditTrain />}/>

        </Routes>
      </BrowserRouter>
      <ToastContainer theme='colored'/>


    </div>

        
  );
}

export default App;
