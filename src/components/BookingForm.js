import '../styles/BookingForm.css'

export default function BookingForm( { dispatch, availableTimes, reservation, setReservation, submitFormData, error, setError } ) {
  
    const minDate = new Date().toISOString().split('T')[0];
    

    const handleSubmit = (e) => {
    e.preventDefault()
        if(reservation.time == '') {
           setError({...error, time:'Please select a time slot.'})
        return
    }
    if (reservation.amount == '') {
        
        return
    }
    if(reservation.occasion == '') {
       
        return
    }

    console.log(reservation)
    submitFormData(reservation)
    
  }
   const handleDateChange = (e) => {
        
        
        setReservation({...reservation, date: e.target.value})

        dispatch(e.target.value)
      
   }
    
    
    return(<form onSubmit={handleSubmit}>
        
        <h1 className='formTitle'> Reserve a table</h1>
        <div className="formElem">

        
        <label htmlFor="date">Date:</label>
            <input type="date" id="date" min={minDate} value={reservation.date} onChange={handleDateChange} onBlur={() => {
                setError({...error, date:true})
            }} required ></input>
      {error.date && reservation.date === '' ? <p className='errText'>Please select a date</p>: null}
    </div>
    <div className='formElem'>
        <label htmlFor="Time">Time:</label>
            <select id="Time" value={reservation.time}  onChange={(e) => setReservation({...reservation, time: e.target.value})} onBlur={() => {
                setError({...error, time:true})
            }} required>
                
                <option value=''>Select a timeslot </option>
                {availableTimes.map((time) => {
                    return(
                        <option data-testid="availableTime" key={time} value={time}>{time}</option>
                    )
                })}
            </select>
           {error.time && reservation.time === '' ? <p className="errText">Please select a available time slot</p> : null}
        </div>

        <div className="formElem">
        <label htmlFor="amount">Number of guests:</label>
            <select id="amount" value={reservation.amount} onChange={(e) => setReservation({...reservation, amount: e.target.value})} onBlur={() => {
                setError({...error, amount:true})
            }} required>
            <option key={0} value=''>Select amount:</option>
            <option key={1}>1</option>
            <option key={2}>2</option>
            <option key={3}>3</option>
            </select>
            {error.amount && reservation.amount === '' ? <p className='errText'>Please select the amount of diners.</p>:null}
        </div>



        <div className="formElem">
        <label htmlFor="occasion">Occasion:</label>
            <select id="occasion" value={reservation.occasion} onChange={(e) => setReservation({...reservation, occasion: e.target.value})} onBlur={()=> {
                setError({...error, occasion: true})
            }} required>
            <option key={0} value=''>Select an occasion:</option>
            <option key={1} value="wedding">Wedding</option>
            <option key={2} value="birthday">Birthday</option>
            </select>
            {error.occasion && reservation.occasion === '' ? <p className='errText'>Please select an occasion.</p>:null}
        </div>
    
        


        <div>
            <button type="submit">Submit</button>
        </div>
    </form>)
}