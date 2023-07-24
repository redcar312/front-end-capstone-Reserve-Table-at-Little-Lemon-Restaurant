import heroImg from '../images/restauranfood.jpg'
import '../styles/Hero.css'
import { Link } from 'react-router-dom'
export default function Hero() {

    return(<div>
        <section className='hero'>
            <div className='heroLeft'>
                <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                </div>
                <div>
                  <p>We are a family owned Mediterranean restaurant,
                    focused on traditional recipes whit a modern twist.
                  </p>
                  <Link to="/reservations">Reserve a table</Link>
                </div>
            </div>
            <div className='heroRight'>
            <img src={heroImg} className='heroImg'></img>
            </div>
        </section>
    </div>)
}