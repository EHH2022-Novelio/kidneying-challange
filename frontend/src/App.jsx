import './App.css';
import Nav from './Components/Navbar/Nav';
import Chart from "./Components/Chart";
import Footer from './Components/Navbar/footer';
import Landing from './Components/LandingPage/Landing';
import LogIn from './Components/auth/Login';
import Sign from './Components/auth/Register';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Nav logged={false}/>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path="/home" element={null}></Route>
        <Route path='/register' element={<Sign />}></Route>
      </Routes>
      
    </>
  );
}

export default App;
