import Logo from "../images/Logo.svg"
import '../styles/Nav.css'
import { useState, useRef, useEffect } from "react"
import Hamburger from '../images/🦆 icon _hamburger menu.svg'

export default function Nav (){
    const headerRef = useRef(false)
    const [showNav, setShowNav] = useState(false)
     const handleNav = () => {
        setShowNav(!showNav)
     }
     useEffect(() => { 
        let prevScrollPos = window.scrollY; 
      
        const handleScroll = () => { 
          const currentScrollPos = window.scrollY; 
          const headerElement = headerRef.current; 
          if (!headerElement) { 
            return; 
          } 
          if (prevScrollPos > currentScrollPos) { 
            headerElement.style.transform = "translateY(0)"
            
          } else { 
            headerElement.style.transform = "translateY(-200px)"; 
          } 
          prevScrollPos = currentScrollPos; 
        } 
        window.addEventListener('scroll', handleScroll) 
      
        return () => { 
          window.removeEventListener('scroll', handleScroll) 
        } 
      }, []); 
    
    return(
      
            <nav ref={headerRef}>
                
              <img className="logo" src={Logo}></img>
               <button className="hamburger" onClick={handleNav}><img src={Hamburger}></img></button>
                 <div className={
                    showNav ? "navigation-menu expanded" : "navigation-menu"
                 }>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#"> Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
                </div>
                
            </nav>
           
    )
}