import StudentInfoCard from "../components/cards/StudentInfoCard.jsx";
import AppNavBar from "../components/AppNavBar.jsx";
import SkillsListCard from "../components/cards/SkillsListCard.jsx";
import "./ProfilePage.css";

import { getUserbyId } from "../utils/users.js";
import { getContentByLevel } from "../utils/level.js";

const ProfilePage = () => {
  const loggedInUserId = 5;
  const student = getUserbyId(loggedInUserId);

  const {level} = student;
  const levelInfo =getContentByLevel(level);
  
  return (
    <div className="profile-page">
      <AppNavBar />
      <StudentInfoCard studentInfo={student} />
      <SkillsListCard ttLevels={levelInfo}/>
    </div>
  );
};

export default ProfilePage;
