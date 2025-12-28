import studentList from "../data/studentlist.json";
import StudentInfoCard from "../components/cards/StudentInfoCard.jsx";

//Working on in the future not done yet
const AdminPage = () => {
  const loggedInUserId = 4;
  const student = studentList.find((s) => s.id === loggedInUserId);
  console.log("ProfilePage student:", student);
  return (
    <div>
      <StudentInfoCard studentInfo={student} />
    </div>
  );
};

export default AdminPage;
