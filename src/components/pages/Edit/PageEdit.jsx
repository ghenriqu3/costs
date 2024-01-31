import { parse, v4 as uuidv4 } from 'uuid'

import { useEffect, useState } from 'react'
import './page-edit.css'
import { useParams } from 'react-router-dom'
import Loading from '../../layout/Loading/Loanding'
import Container from '../../layout/Container/Container'
import ProjectForm from '../../layout/project/ProjectForm/ProjectForm'
import Message from '../../layout/Message/Message'
import ServiceForm from '../../layout/ServiceForm/ServiceForm'
import ServiceCard from '../../layout/ServiceCard/ServiceCard'



function PageEdit(){ 

    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServicetForm, setShowServicetForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    const [services, setServices] = useState([])

    useEffect(() =>{
        setTimeout(() => {
            fetch(`https://json-server-zeta-three.vercel.app/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
        .then((data) =>{ 
            setProject(data)
            setServices(data.services)
        })
        .catch(err => console.log(err))
    }, 1000)
    }, [id])

    function editPost(project){
        setMessage('')
        //validação do valor do projeto
        if(project.budget < project.cost){
            //mensagem
            setMessage("O orçamento nao pode ser menor que o custo do projeto!")
            setType('error')
            return(false)
        }

        fetch(`https://json-server-zeta-three.vercel.app/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(project),
    }).then(resp => resp.json())
    .then((data) => {
        setProject(data)
        setShowProjectForm(false)
        //mesangem
        setMessage("Projeto alterado com sucesso!")
        setType('sucesso')
    })
    .catch(err => console.log(err))
    }

    function createService(project){
        setMessage('')
        //last service
        const lastService = project.services[project.services.length -1]
        lastService.id = uuidv4()
        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        //maximum value validation
        if(newCost > parseFloat(project.budget)){
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            project.services.pop()
            return false
        }

        project.cost = newCost

        fetch(`https://json-server-zeta-three.vercel.app/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) =>{
                setShowServicetForm(false)
                console.log(data)
            })
            .catch((err) => console.log(err))
    }

    function removeService(){

    }

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
        // console.log(!showProjectForm)
    }
    function toggleServicetForm(){
        setShowServicetForm(!showServicetForm)
        // console.log(!showProjectForm)
    }

    return(
        <>
        {project.name ? (
            <div className='project-details'>
                <Container customClass="column">
                            {message && <Message type={type} msg={message} />}
                        <div className='details-container'>
                            <h1>Projeto: {project.name}</h1>
                            <button className="btn" onClick={toggleProjectForm}>{!showProjectForm ? 'Editar Projeto' : 'Fechar'}</button>
                            {!showProjectForm ? (
                                <div className='project-info'>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total do Orçamento:</span> R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total Ultilizado:</span> R${project.cost}
                                    </p>
                                </div>
                            ):(
                                <div className='project-info'>Detalhes do projeto
                                    <ProjectForm handleSubmit={editPost} btnText="Concluir Edição" projectData={project}/>
                                </div>
                            )}
                        </div>
                        <div className='service-container'>
                                <h2>Adicione um serviço:</h2>
                                <button className="btn" onClick={toggleServicetForm}>{!showServicetForm ? 'Adicionar serviço' : 'Fechar'}</button>
                                <div className='project-info'>
                                    {showServicetForm && (
                                        <ServiceForm handleSubmit={createService} btnText="adicionar serviço" projectData={project}/>
                                    )}
                                </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start">
                            {services.length > 0 &&
                            services.map((service) => (
                                <ServiceCard 
                                    id={service.id}
                                    name={service.name}
                                    cost={service.cost}
                                    description={service.description}
                                    key={service.id}
                                    handleRemove={removeService}
                                />
                            ))
                            }
                            {services.length === 0 && <p>Não a serviços cadastrados</p>}
                        </Container>
                </Container>
            </div>
        ):(
            <Loading />
        )}
        </> 
    )
}

export default PageEdit