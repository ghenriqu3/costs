import './select.css'

function Select({text, name, options, handleOnChange, value}){
    // console.log(options) 
    return(
        <div className='form-control'>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
            <option>Selecione uma opcao</option>
            {options.map((option) => (
                <option value={option.id} key={option.id}>{option.Name}</option>
            ))}
        </select>
        </div>
    )

}

export default Select