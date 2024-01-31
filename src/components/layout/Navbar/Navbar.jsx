import './navbar.css'
import {Link} from 'react-router-dom'
import Container from '../Container/Container'

import logo from '../../../img/costs_logo.png'
function NavBar(){
    return(
        <nav className='navbar'>
          <Container>
            <Link to="/">
              <img src={logo} alt="Logo Costs" />
            </Link>
            <ul className='list'>
              <li className='item'>
                <Link to="/">Home</Link>
              </li>
              <li className='item'>
                <Link to="/newproject">New Project</Link>
              </li>
              <li className='item'>
                <Link to="/page-project">projetos</Link>
              </li>
              <li className='item'>
                <Link to="/company">Company</Link>
              </li>
              <li className='item'>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Container>
        </nav>
    )
}

export default NavBar