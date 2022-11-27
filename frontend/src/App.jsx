import './App.css';
import Nav from './Components/Navbar/Nav';
import Landing from './Components/LandingPage/Landing';
import LogIn from './Components/auth/Login';
import Sign from './Components/auth/Register';
import Chart from './Components/Infograph/Chart';
import {Routes, Route} from "react-router-dom";
import { useState } from 'react';
import Dashboard from './Components/Dashboard/dashboard';
import Check from './Components/Chekups/Checkup';


function App() {

  const [user, setUser] = useState({})
  console.log(user);

  return (
    <>
      <Nav user={user}/>
      <Routes>
        <Route path='/' element={<Landing user={user} setUser={setUser}/>}></Route>
        <Route path='/login' element={<LogIn user={user} setUser={setUser}/>}></Route>
        <Route path="/dashboard" element={<Dashboard user={user} />}></Route>
        <Route path='/register' element={<Sign user={user} setUser={setUser}/>}></Route>
        <Route path='/infograph' element={<Chart setUser={setUser}/>}></Route>
        <Route path='/Checkups' element={<Check user={user}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
