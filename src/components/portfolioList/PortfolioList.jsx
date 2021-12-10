import './PortfolioList.scss'
import Portfolio from '../portfolio/Portfolio'
import { products } from '../../data'

function PortfolioList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Jeff: Driven to Discover.</h1>
                <p className="pl-desc">
                    Jeff is a hard worker and a smart guy. Eventually, he will build something great.
                </p>
            </div>
            <div className="pl-list">
                {products.map(project => (
                    <Portfolio  img={project.img} key={project.id} link={project.link}/>
                ))}
            </div>
        </div>
    )
}

export default PortfolioList
