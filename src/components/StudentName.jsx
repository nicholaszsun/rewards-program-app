import "./StudentName.css";

const StudentName = ({ userName }) => {
  return (
    <div className="student-name">
      {userName?.name || "No matching student found"}
    </div>
  );
};

export default StudentName;
