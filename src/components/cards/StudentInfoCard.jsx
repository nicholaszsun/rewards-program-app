import StudentName from "../../components/StudentName";
import StudentLevel from "../../components/StudentLevel";
import "./StudentInfoCard.css";

const StudentInfoCard = ({ studentInfo }) => {
  return (
    <div className="student-info-card">
      <StudentName userName={studentInfo} />
      <StudentLevel userLevel={studentInfo} />
      <div className="tt-levels__page-break"></div>
      <p className="level-title__description">
        Students progress through the GROWN standards, with each level building
        strength, control, and confidence, and earn a colored wristband upon
        completion to signify their achievement
      </p>
    </div>
  );
};
export default StudentInfoCard;
