function ProgressBar({ amount, goal }) {
  const percentage = (amount / goal) * 100;

  return (
    <div>
      <h2>
        You have completed: {amount}/ {goal}
      </h2>
      <p>You are at {percentage}%</p>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
