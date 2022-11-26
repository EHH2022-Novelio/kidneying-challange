import './App.css';
import Nav from './Components/Navbar/Nav';
import Chart from "./Components/Chart";
import Footer from './Components/Navbar/footer';
import Landing from './Components/LandingPage/Landing';

function App() {
  return (
    <div className="App">
      <Nav logged={false}/>
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
