import { useNavigate } from 'react-router-dom'

import './projects.css'
import Form from '../../layout/project/ProjectForm/ProjectForm'


function Projects(){

    const navigate = useNavigate()

    function createPost(project){
        //inicializar custos e servicos 
        // console.log(project.cost)
        project.cost = 0
        project.services = []

        fetch("https://json-server-zeta-three.vercel.app/projects", {
            method: "POST",
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => { 
            // console.log(data)
            const state = {message: 'Projeto criado com sucesso'}
            navigate('https://costs-teal.vercel.app/page-project', {state})
    })
        .catch(err => console.log(err)) 
    }

    return(
        <div className='newproject-container'>
            <h1>Criar Projeto</h1>
            <p>Crie o seu projeto para depois adicionar os servicos</p>
            <Form handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default Projects