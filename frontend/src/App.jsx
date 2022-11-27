import './App.css';
import Nav from './Components/Navbar/Nav';
import Landing from './Components/LandingPage/Landing';
import LogIn from './Components/auth/Login';
import Sign from './Components/auth/Register';
import {Routes, Route} from "react-router-dom";
import { useState } from 'react';
import Dashboard from './Components/Dashboard/dashboard';


function App() {

  const [user, setUser] = useState({})
  console.log(user);

  return (
    <>
      <Nav user={user}/>
      <Routes>
        <Route path='/' element={<Landing user={user} />}></Route>
        <Route path='/login' element={<LogIn user={user} setUser={setUser}/>}></Route>
        <Route path="/dashboard" element={<Dashboard user={user} />}></Route>
        <Route path='/register' element={<Sign user={user} setUser={setUser}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
