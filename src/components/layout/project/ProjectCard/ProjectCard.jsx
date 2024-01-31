import './projectCard.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
function ProjectCard({id, name, category, budget, handleRemove}){
    // console.log(handleRemove)

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className='project-card'>
            <h4>{name}</h4>
            <p>
                <span>orçamento:</span> R${budget}
            </p>
            <p className='category-text'>
                <span className={category.name.toLowerCase()}></span>{category.name}
            </p>

            <div className='project-card-actions'>
                <Link to={`/page-edit/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                <BsFillTrashFill />Remover
                </button>
            </div>
        </div>
    )
}

export default ProjectCard