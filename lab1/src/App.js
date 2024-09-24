import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empty dishwasher"/>
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away." />
      <Task title="Tidy" deadline="Today" />
      <Task title="Pay your taxes" deadline="Today" description="its over tasky will get you" />
    </div>
  );
}

export default App;
