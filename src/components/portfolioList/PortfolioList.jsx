import './PortfolioList.scss'
import Portfolio from '../portfolio/Portfolio'

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
                <Portfolio/>
                <Portfolio/>
                <Portfolio/>
                <Portfolio/>
                <Portfolio/>
                <Portfolio/>
            </div>
        </div>
    )
}

export default PortfolioList
