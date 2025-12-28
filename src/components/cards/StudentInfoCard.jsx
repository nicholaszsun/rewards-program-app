import StudentName from "../../components/StudentName";
import StudentLevel from "../../components/StudentLevel";
import "./StudentInfoCard.css";

const StudentInfoCard = ({ studentInfo }) => {
  const { name, level } = studentInfo;
  return (
    <div className="student-info-card">
      <StudentName userName={name} />
      <StudentLevel userLevel={level} />
      <div className="tt-levels__page-break"></div>
      <p className="level-title__description">
        Students progress through the <strong>GROWN</strong> standards, with
        each level building strength, control, and confidence, and earn a
        colored wristband upon completion to signify their achievements.
      </p>
    </div>
  );
};
export default StudentInfoCard;
