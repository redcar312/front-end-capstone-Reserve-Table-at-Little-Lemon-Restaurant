import lemonDessert from '../images/lemon dessert.jpg'
import greekSalad from '../images/greek salad.jpg'
import bruchetta from '../images/bruchetta.svg'
import { MdDeliveryDining } from "react-icons/md";
import '../styles/Specials.css'
export default function Specials(){

const specials = [
    {
        img: greekSalad,
        price: '$12,00',
        title: 'Greek salad',
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        img: bruchetta,
        price: '$5,99',
        title: 'Bruchetta',
        description: "Our bruchetta is made from grilled bread that has been smeared whit garlic and seasoned whit salt and olive oil."
    },
    { img: lemonDessert,
      price: '$5,00',
      title: 'Lemon Dessert',
      description: "This comes straight from grandma's recipe book, every last has been sourced and is as authentic as can be imagined.",

    }
]  
    
let cards = specials.map((special) => {
    return (<div className='card'>
        <div>
            <img src={special.img} className='cardImg'></img>
        </div>
        <div className='cardDetails'>
        <div className='cardTitle'>
            <h3>{special.title}</h3>
            <h3>{special.price}</h3>
        </div>
        <div className='text'>
            <p>{special.description}</p>
            
        </div>
        <div className='orderBtn'>
        <h3>Oder here</h3>
        
        </div>
        </div>
    </div>)
})


return(
    <div>
        <section className='specialsSection'>
            <div className='specialsHeader'>
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
            </div>
            <div className='cardSection'>{cards}</div>
        </section>
    </div>
)

}