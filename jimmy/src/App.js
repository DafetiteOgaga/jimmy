import logo from './logo.svg';
import './App.css';

function App() {
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
				<p>
					<a
						className="App-link"					
          	href="https://github.com/DafetiteOgaga/custom_commands"					
          	target="_blank"
						rel="noopener noreferrer"
					>
          	Install more custom commands
					</a>
				</p>
      </header>
    </div>
  );
}

export default App;
