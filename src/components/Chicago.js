import img1 from '../images/Mario and Adrian A.jpg'
import img2 from '../images/Mario and Adrian b.jpg'
import '../styles/Chicago.css'
export default function Chicago (){
    return(<div>
        <section className='chicagoSection'>
            <div className="left">
                <div className="chicagoHeader">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</p>
            </div>
            <div className="right">
                <picture>
                    <img src={img1} className='img1'></img>
                    <img src={img2}></img>
                </picture>
            </div>
        </section>
    </div>)
}