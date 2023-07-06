import '../styles/Footer.css'


export default function Footer(){
    return(<footer>
        <div className="logo">
            
        </div>
        <div className="navigation">´
        <h2>Navigation</h2>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order online</a></li>
            <li><a href="#">Login</a></li>
            </ul>
        </div>
        <div className="contact">
            <h2>Contact</h2>
            <ul>
                
                <li>littlelemon@mail.com</li>
                <li>+123 123123123</li>
            </ul>
        </div>
        <div className="socials">
            <h2>Socials</h2>
            <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            </ul>
        </div>
    </footer>)
}