import '../styles/Footer.css'
import logo from '../images/Asset 9@4x.png'

export default function Footer(){
    return(<footer>
        <div className="logo">
            <img src={logo} alt='logo'></img>
        </div>
        <div className="navigation">´
  
            <ul>
            <h2>Navigation</h2>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order online</a></li>
            <li><a href="#">Login</a></li>
            </ul>
        </div>
        <div className="contact">
            
            <ul>
            <h2>Contact</h2>
                <li>littlelemon@mail.com</li>
                <li>+123 123123123</li>
            </ul>
        </div>
        <div className="socials">
          
            <ul>
            <h2>Socials</h2>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            </ul>
        </div>
    </footer>)
}