import logo from './logo.svg';
import './App.css';
import AddIcon from '@material-ui/icons/Add'

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <h1>Google Keep</h1>
      </div>

      <div className="input_div">
        <input type="text" placeholder="Title..." autoComplete="off" />
        <textarea placeholder="Enter Your Note..."></textarea>
        <button type="button"><AddIcon/></button>
      </div>
    </div>
  );
}

export default App;
