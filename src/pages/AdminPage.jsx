import StudentInfoCard from "../components/cards/StudentInfoCard.jsx";
import { getUserbyId } from "../utils/users.js";

//Working on in the future not done yet
const AdminPage = () => {
  const loggedInUserId = 5;
  const student = getUserbyId(loggedInUserId);
  return (
    <div>
      <StudentInfoCard studentInfo={student} />
    </div>
  );
};

export default AdminPage;
