import { useState, useEffect } from 'react'

import './projectForm.css'
import Input from '../../Form/Input/Input'
import Select from '../../Form/Select/Select'
import Submit from '../../Form/Button/Submit'

function ProjectForm({handleSubmit, btnText, projectData}){
    // console.log(handleSubmit)

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    //metodo que faz o get do campo select do formulario 
    useEffect(() =>{
        fetch("https://json-server-zeta-three.vercel.app/categories",{
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())
        .then((data) =>{setCategories(data)})
        .catch((err) => console.log(err))
    }, [])
    
    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(project)
        // console.log(project)
    }
    
    function handleChange(e){
        setProject({...project, [e.target.name] : e.target.value})
        // console.log(project)
    }

    function handleCategory(e){
        setProject({
            ...project, 
            category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
    }
    // console.log(project.category)

    return(
        <form onSubmit={submit}>
            <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={project.name ? project.name : ''}/>

            <Input type="number" text="Valor do projeto" name="budget" placeholder="Insira o valor do projeto" handleOnChange={handleChange} value={project.budget ? project.budget : ''}/>
            
            <Select
            name="category_id" 
            text="Selecione uma categoria" 
            options={categories} 
            handleOnChange={handleCategory} 
            value={project.category ? project.category.id : ''} />
            <Submit  text={btnText}/>
        </form>
    )
}

export default ProjectForm