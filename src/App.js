import logo from './logo.svg';
import './App.css';
import Typography from "@material-ui/core/Typography/Typography";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <Typography variant={"h3"}>
              Hydrogen-based energy
          </Typography>
          <Typography variant={"h5"}>
              Coming soon
          </Typography>
      </header>
    </div>
  );
}

export default App;
