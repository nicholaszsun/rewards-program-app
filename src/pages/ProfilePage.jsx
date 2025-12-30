import StudentInfoCard from "../components/cards/StudentInfoCard.jsx";
import AppNavBar from "../components/AppNavBar.jsx";
import SkillsListCard from "../components/cards/SkillsListCard.jsx";
import "./ProfilePage.css";

import { getUserbyId } from "../utils/users.js";
import { getContentByLevel } from "../utils/level.js";
import { useState } from "react";

const ProfilePage = () => {
  const [loggedInUserId, setLoggedInUserId] = useState(1);
  const student = getUserbyId(loggedInUserId);

  const {level} = student;
  const levelInfo =getContentByLevel(level);
  
  return (
    <div className="profile-page">
      <AppNavBar />
      <StudentInfoCard studentInfo={student} />
      <button onClick={()=> setLoggedInUserId(prev => (prev === 5 ? 1 : prev + 1))}>Next User</button>
      <SkillsListCard ttLevels={levelInfo}/>
    </div>
  );
};

export default ProfilePage;
