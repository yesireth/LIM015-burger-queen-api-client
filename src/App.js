import logo from './assets/logo-bq.png';
import './App.css';
import Loging from './componets/LogIn'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Loging/>

        </p>
      
      </header>
    </div>
  );
}

export default App;
