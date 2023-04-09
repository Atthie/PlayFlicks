import { Row, Col } from 'react-materialize';
import Slider from 'react-slick';
import baniere from '../../assets/banniere.jpg'
import Bouton from '../Bouton/Bouton'
import './style.css'
function Home() {
      return (
            <div className='banner'>
              <img style={{objectFit: "cover"}}  className="banner-image" src={baniere} alt="background"/>
              <div className='banner-content'>
                <h5> <strong>|</strong> NEW</h5>
                <h1>FLOWERS</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Bouton/>
              </div>
            </div>  
        );
}

export default Home;

