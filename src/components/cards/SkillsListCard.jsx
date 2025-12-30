import "./SkillsListCard.css"
import SkillList from "../SkillList"
const SkillsList = ({ttLevels})=>{
const {title, description, skills} = ttLevels;
return(
    <div className="skill-card__container">
        <div className="skill-card__title">{title}</div>
        <div className="skill-card__description">{description}</div>
        <div className="skill-card__page-break"></div>
        <h4 className="skill-card__skill__requirement-title">Skills Required to Pass</h4>
        <div className="skill-card__list-container">
            <SkillList requiredSkills={skills}/>
        </div>
        
    </div>
)
}
export default SkillsList;