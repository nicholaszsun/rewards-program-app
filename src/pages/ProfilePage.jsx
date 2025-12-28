import studentList from "../data/studentlist.json";
import StudentInfoCard from "../components/cards/StudentInfoCard.jsx";

const ProfilePage = () => {
  const loggedInUserId = 1;
  const student = studentList.find((s) => s.id === loggedInUserId);
  console.log("ProfilePage student:", student);
  return (
    <div>
      <StudentInfoCard studentInfo={student} />
    </div>
  );
};

export default ProfilePage;
