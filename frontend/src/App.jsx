import './App.css';
import Nav from './Components/Navbar/Nav';
import Chart from "./Components/Chart";
import Footer from './Components/Navbar/footer';
import Landing from './Components/LandingPage/Landing';
import LogIn from './Components/auth/Login';
import Sign from './Components/auth/Register';

function App() {
  return (
    <div className="App">
      <Nav logged={false}/>
      <Landing />
      {/* <LogIn />
      <Sign /> */}
      <Footer />
    </div>
  );
}

export default App;
