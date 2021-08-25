import logo from './logo.svg';
import './App.css';
import { MainNavbar } from './Navbar';

const App = () => {
  return (
    <>
      <MainNavbar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is Juan's teaching moment.
          </p>
          <a
            className="App-link"
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
