import "./StudentName.css";

const StudentName = ({ userName }) => {
  return (
    <div className="student-name">
      {userName || "No matching student found"}
    </div>
  );
};

export default StudentName;
