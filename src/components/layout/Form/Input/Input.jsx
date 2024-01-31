import './input.css'

function Input({type, text, name, placeholder, handleOnChange, value}){
    // console.log(handleOnChange)
    return(
        <div className='form-control'>
        <label htmlFor={name}>{text}:</label>
        <input type={type} name={name} placeholder={placeholder} onChange={handleOnChange} value={value}/>
        </div>
    )

}

export default Input