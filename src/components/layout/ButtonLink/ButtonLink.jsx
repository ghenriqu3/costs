import { Link } from 'react-router-dom'
import  './buttonLink.css'
function ButtonLink({to, text}){
    return(
        <Link className='btn' to={to}>
            {text}
        </Link>
    )
}

export default ButtonLink