import './home.css'
import savings from '../../../img/savings.svg'
import ButtonLink from '../../layout/ButtonLink/ButtonLink'
function Home(){
    return(
        <section className='home-container'>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>comece a gerenciar os seus projetos agora mesmo!</p>
            <ButtonLink text="Criar projeto" to="/newproject" />
            <img src={savings} alt="costs" />
        </section>
    )
}
export default Home