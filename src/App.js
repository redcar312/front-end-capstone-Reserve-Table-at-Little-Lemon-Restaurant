
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home';
import Footer from './components/Footer';
import BookingPage from './BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import  { Route, Routes } from 'react-router-dom'
import BookingForm from './components/BookingForm';


function App() {

  
  return (
  
   <div className='body'>
     <Nav></Nav>


  
              <Routes>
              <Route exact path="/" element={<Home />}/> 
              <Route path="/reservations" element={<BookingPage/>}/>
              <Route path="/confirmed" element={<ConfirmedBooking />}  />
              </Routes>
           
    <Footer></Footer>
      </div>
      
    
  );
}

export default App;
