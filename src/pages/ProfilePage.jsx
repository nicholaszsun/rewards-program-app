import StudentInfoCard from "../components/cards/StudentInfoCard.jsx";
import AppNavBar from "../components/AppNavBar.jsx";
import "./ProfilePage.css";

import { getUserbyId } from "../utils/users.js";

const ProfilePage = () => {
  const loggedInUserId = 2;
  const student = getUserbyId(loggedInUserId);
  console.log("ProfilePage student:", student);
  return (
    <div className="profile-page">
      <AppNavBar />
      <StudentInfoCard studentInfo={student} />
    </div>
  );
};

export default ProfilePage;
