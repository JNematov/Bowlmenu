import instagram from '../images/instagram-logo.png';
import yelp from '../images/yelp-logo.webp';

const Footer = () => {
    return ( 
        <footer>
        <h3 className="phone-number">512-992-0128</h3>
        <ul>
            <li><a href="https://www.instagram.com/explore/locations/146326549510393/uzeat-uzbek-restaurant" target={"_blank"} rel="noreferrer"><img alt="instagram" src={instagram} /></a></li>
            <li><a href="https://www.yelp.com/biz/bowl-menu-austin-2" target={"_blank"} rel="noreferrer"><img src={yelp} alt="instagram"/></a></li>
        </ul>
        </footer>
     );
}
 
export default Footer;