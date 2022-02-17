import './App.css';
import Quiz from './components/quiz';
import Landing from './components/landing';
import { useSelector } from "react-redux";

function App() {
  const username = useSelector((state) => state.user);

  return (
    <div className="App">
      <h1>Chart Quiz</h1>
      <div className="content">
        {!username && <Landing></Landing>}
        { username && <Quiz></Quiz>}
      </div>
    </div>
  );
}

export default App;
