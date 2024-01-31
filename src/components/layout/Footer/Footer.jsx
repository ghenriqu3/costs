import './footer.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer(){
    return(
        <footer className='footer'>
            <ul>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className='copy_right'><span>Costs</span> &copy; 2023</p>
        </footer>
    )
}
export default Footer 