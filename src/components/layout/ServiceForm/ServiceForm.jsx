// import '../project/ProjectForm/'

import Input from "../Form/Input/Input"
import Submit from "../Form/Button/Submit"
import { useState } from "react"


function ServiceForm({ handleSubmit, btnText, projectData }){
    const [service, setService] = useState()
    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }
    function handleChange(e){
        setService({...service, [e.target.name]: e.target.value})
    }
    return(
        <form onSubmit={submit}>
            <Input type="text" text="Nome do serviço" name="name" placeholder="Insira o nome do serviço" handleOnChange={handleChange} />
            <Input type="number" text="Custo do serviço" name="cost" placeholder="Insira o valor do serviço" handleOnChange={handleChange} />
            <Input type="text" text="Descrição do serviço" name="description" placeholder="Insira a descrição do serviço" handleOnChange={handleChange}/>
            <Submit text={btnText}/>
        </form>
    )
}

export default ServiceForm