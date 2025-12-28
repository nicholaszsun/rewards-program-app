function PointsButton({ amount, onEarn }) {
  return <button onClick={() => onEarn(amount)}>Earn {amount} points</button>;
}

export default PointsButton;
