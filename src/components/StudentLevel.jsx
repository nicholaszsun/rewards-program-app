const StudentLevel = ({ userLevel }) => {
  return (
    <div className="student-level">
      Current Level: <strong>{userLevel || "No Level"}</strong>
    </div>
  );
};

export default StudentLevel;
