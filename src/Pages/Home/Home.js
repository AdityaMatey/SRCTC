import './Home.css'
import { Link } from 'react-router-dom'
import Header from '../../Components/HeaderComponent/Header'
import TrainSearchBlock from '../../Components/TrainSearchComponent/TrainSearchBlock'
import img1 from '../../Images/train2.jfif';
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='home'>
            
            <div>
            <Header />    
            </div>

            <div>
                <marquee className = "homemarquee">Due to Covid Guidelines, follow Rules And Regulations, Wear Mask all the Time!!!  <marquee className = "secondmarquee">Due to Covid Guidelines, follow Rules And Regulations, Wear Mask all the Time!!!</marquee> </marquee>
                </div>
            <div>
                <button onClick={()=>{
                    navigate('/fetchbypnr')
                }} className='btn btn-primary pnrStatus'>PNR STATUS</button>
                <TrainSearchBlock />
            </div>

        </div>
    )
}

export default Home