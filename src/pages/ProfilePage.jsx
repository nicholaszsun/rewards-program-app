import StudentInfoCard from "../components/cards/StudentInfoCard.jsx";
import AppNavBar from "../components/AppNavBar.jsx";
import SkillsList from "../components/SkillsList.jsx";
import "./ProfilePage.css";

import { getUserbyId } from "../utils/users.js";
import { getContentByLevel } from "../utils/level.js";

const ProfilePage = () => {
  const loggedInUserId = 5;
  const student = getUserbyId(loggedInUserId);
  const {level} = student;
  const skillObject =getContentByLevel(level);
  console.log("Skill Object:", skillObject);

  return (
    <div className="profile-page">
      <AppNavBar />
      <StudentInfoCard studentInfo={student} />
      <SkillsList/>
    </div>
  );
};

export default ProfilePage;
