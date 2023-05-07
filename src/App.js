import CounterCom from './components/any';
// import Second from './components/';
import './app.css'
import ToDo from './components/todo';
import Login from './components/login';
import Second from './components/colors';

function App() {
  return <div className="App">
    <CounterCom/>
    <Second/>
    <ToDo/>
    <Login/>
  </div>;
}

export default App;
