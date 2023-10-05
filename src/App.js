import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <logo />
        <h1>Hello from React</h1>
        <Weather city="Kyiv" />
      </header>
    </div>
  );
}

export default App;
