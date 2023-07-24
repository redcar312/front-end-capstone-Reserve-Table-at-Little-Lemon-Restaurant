import { useEffect, useState, useReducer } from "react"
import BookingForm from "./components/BookingForm"
import { fetchAPI, submitAPI } from  './FakeApi' 
import ConfirmedBooking from "./components/ConfirmedBooking"
import { useNavigate } from "react-router-dom"
import './styles/BookingPage.css'
export default function BookingPage () {
  const [error, setError] = useState({
    time: false,
    date:'',
    amount:'',
    occasion:'',
  })
    
    
    const [reservation, setReservation] = useState({
        occasion:"",
        date: "",
        time: "",
        amount:"",
    })
    const updateTimes = (state, action) => {
    state = fetchAPI(new Date(action))
    return state
    
        
    }
    const initializeTimes = initialTimes => 
        initialTimes = fetchAPI(new Date())
    
    

    const [availableTimes, dispatch]  = useReducer(updateTimes, [],initializeTimes)
    
    const navigate = useNavigate()
    const submitFormData = ( formData ) => {
        const response = submitAPI(formData)
        if(response) navigate("/confirmed")
    }
    return(
        <div className="background">
        
            
            <BookingForm dispatch={dispatch} availableTimes={availableTimes} reservation={reservation} setReservation={setReservation} submitFormData={submitFormData} error={error} setError={setError}></BookingForm>
    
        </div>
    )
}


