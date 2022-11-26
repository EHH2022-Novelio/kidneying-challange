import './App.css';
import Nav from './Components/Navbar/Nav';
import Landing from './Components/LandingPage/Landing';
import LogIn from './Components/auth/Login';
import Sign from './Components/auth/Register';
import {Routes, Route} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [user, setUser] = useState({})
  console.log(user);

  return (
    <>
      <Nav logged={false}/>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/login' element={<LogIn setUser={setUser}/>}></Route>
        <Route path="/home" element={null}></Route>
        <Route path='/register' element={<Sign setUser={setUser}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
