import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import '../styles/ConfirmedBooking.css'
import { useNavigate } from 'react-router-dom'


export default function ConfirmedBooking() {
    const navigate = useNavigate()
    const handleRedirect = () => {  
         navigate('/')
    }
    return(<div className="content" onLoad={setTimeout(handleRedirect,5000)} >
            
            <div className='confirmation-text'>
            <h1>Booking Confirmed.</h1>
            <h2>You will be redirected to back to home page shortly.   <FontAwesomeIcon icon={faCircleNotch} spin style={{color: "#495e57",}} /></h2>
            </div>
    </div>)
}