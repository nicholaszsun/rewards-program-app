import "./Skills.css"
const Skills = ({skill}) => {
    return(
        <div className="skill-card">
            <div className="skill-card__skill-name">{skill}</div>
            <div className ="skill-card--status">Status 00/00/00</div>
        </div>
    )
        
        
}
export default Skills;