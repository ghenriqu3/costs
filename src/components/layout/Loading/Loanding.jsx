import imgLoading from '../../../img/loading.svg'
import './loading.css'
function Loading(){
    return(
        <div className='loader-container'>
            <img className="loader" src={imgLoading} alt="load" />
        </div>
    )
}

export default Loading