import { useState } from "react";
import TaskList from "./TaskList";
import PointsButton from "./PointsButton";
import ProgressBar from "./ProgressBar";

function App() {
  const [points, setPoints] = useState(0);

  const tasks = [
    { name: "Drink Water", points: 5 },
    { name: "Walk 10 Minutes", points: 10 },
    { name: "Read 5 Pages", points: 15 },
  ];

  function handleComplete(pointsEarned) {
    setPoints(points + pointsEarned);
  }

  return (
    <div>
      <h1>Rewards Tracker</h1>
      <p>You have {points} points.</p>

      <TaskList tasks={tasks} onComplete={handleComplete} />
      <PointsButton amount={10} onEarn={handleComplete} />
      <ProgressBar amount={points} goal={100} />
    </div>
  );
}

export default App;
