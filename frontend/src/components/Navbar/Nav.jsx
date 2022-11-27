import './Nav.css';
import {Link, useNavigate} from "react-router-dom"
import { useEffect, useState } from 'react';

function Nav(props) {
  	const history = useNavigate();
	function logoutNOW(){
		props.setUser({});
		history("/");
	}
	var [path, setPath] = useState("");
	useEffect(() => {
		setPath(window.location.pathname);
	}, [window.location.pathname])

	console.log(path);

	console.log("here", props.user);
	console.log(props.user === undefined || props.user.username === undefined)
	return (
		<div className="Nav">
			<Link to="/" className='logA'><div className="logo">Novelia</div></Link>
			<div className={props.user === undefined || props.user.username === undefined ? "notLogged" : ""}>
			<div className="listOfNavItems">
				<Link className='aOfNav' to={"/dashboard"}><button className={`item1 btn navBtn ${path === "/dashboard" ? "active" : ""}`}>Dashboard</button></Link>
				<Link className='aOfNav' to={"/checkups"}><button className={`item2 btn navBtn ${path === "/checkups" ? "active" : ""}`}>Check-ups</button></Link>
				<Link className='aOfNav' to={"/infograph"}><button className={`item3 btn navBtn ${path === "/infograph" ? "active" : ""}`}>Graphs</button></Link>
				<Link className='aOfNav' to={"/information"}><button className={`item4 btn navBtn ${path === "/information" ? "active" : ""}`}>Information</button></Link>
			</div>
			</div>
			{props.user === undefined || props.user.username === undefined ? <Link className='loginLink logA' to="/login">Log In</Link> : <></>}
			{props.user === undefined || props.user.username === undefined ? <></> : <Link className='loginLink logA' onClick={logoutNOW} to="/">Log Out</Link>}
		</div>
	);
}

export default Nav;