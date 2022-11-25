import './App.css';
import Nav from './Components/Navbar/Nav';
import Chart from "./Components/Chart";

function App() {
  return (
    <div className="App">
      <Nav />
      <Chart />
      <hr className="divider" />
      <Chart />
    </div>
  );
}

export default App;
