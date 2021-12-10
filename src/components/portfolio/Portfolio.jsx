import "./Portfolio.scss"
function Portfolio({ img, link}) {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="blank" rel="noreferral">
                <img src={img} alt="project image" className="p-img"/>
            </a>
        </div>
    )
}

export default Portfolio
