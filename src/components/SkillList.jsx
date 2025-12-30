import Skills from "./Skills"

const SkillsList = ({requiredSkills}) =>{
    return requiredSkills.map((skill, index)=> (
        <Skills key={index} skill={skill}/>
    ));
};

export default SkillsList;