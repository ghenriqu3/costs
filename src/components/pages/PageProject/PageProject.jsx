import Message from "../../layout/Message/Message"
import { useLocation } from "react-router-dom"
import Container from '../../layout/Container/Container'
import ButtonLink from "../../layout/ButtonLink/ButtonLink"
import ProjectCard from "../../layout/project/ProjectCard/ProjectCard"
import './page-project.css'
import { useState, useEffect } from "react"

import Loading from '../../layout/Loading/Loanding'
function PageProject(){

    const [projects, setProject] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')
    const location = useLocation()
    
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() =>{
       setTimeout(() =>{
        fetch('https://json-server-zeta-three.vercel.app/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
        .then(data => {
            setProject(data)
            setRemoveLoading(true)
        }).catch((err) => console.log(err))
       }, 300)
    }, [])

    function removeProject(id){
        fetch(`https://json-server-zeta-three.vercel.app/projects/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
            }).then((resp) => resp.json())
            .then(() =>{
                setProject(projects.filter((project) => project.id !== id))
                //message
                setProjectMessage('Projeto Removido com sucesso!')
            })
            .catch(err => console.log(err))
        }
    

    return(
        <div className="project-container">
            <div className="title-container">
                <h1>Todos os projetos</h1>
                <ButtonLink to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message type="sucesso" msg={message}/>}
            {projectMessage && <Message type="sucesso" msg={projectMessage}/>}
            <Container customClass="start">
                {projects.length > 0 && 
                projects.map((project) => (
                    <ProjectCard id={project.id} name={project.name} budget={project.budget} category={project.category} key={project.id} handleRemove={removeProject}/>
                ))}
            {!removeLoading && <Loading />}
            {removeLoading && projects.length === 0 &&
                (<p>Desculpe, não ha nada aqui</p>)
            }
            </Container>
        </div>
    )
}

export default PageProject