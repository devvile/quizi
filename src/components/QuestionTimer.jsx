export default function QuestionTimer({timeout}) {
    
  setTimeout(() => {}, timeout);
  return (
    <div id="timer">
      <h2>Time Remaining: 10</h2>
    </div>
  );
}