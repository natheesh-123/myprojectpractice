import logo from './logo.svg';
import './App.css';

function App() {

//   const display = (event) => {
//     console.log(event.target);
// } 
//   return(
//     <div>

//       <button type="button" className="ButtonClass" onClick={display}>click</button>
//       <input className="inputclass" onChange={display} />
//     </div>

//   );


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );


}

export default App;
