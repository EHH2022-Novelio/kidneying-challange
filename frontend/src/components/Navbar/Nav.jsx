import './Nav.css';
import {Link, useNavigate} from "react-router-dom"

function Nav(props) {
  const history = useNavigate();
  return (
    <div className="Nav">
        <Link to="/" className='logA'><div className="logo">Novelia</div></Link>
        <div className={props.user.username === undefined ? "notLogged" : ""}>
          <div className="listOfNavItems">
              <button className="item1 btn navBtn">Dashboard</button>
              <button className="item2 btn navBtn">Check-ups</button>
              <button className="item3 btn navBtn">Graps</button>
              <button className="item4 btn navBtn">Information</button>
          </div>
        </div>
        <Link className='loginLink logA' to="/login">Log In</Link>
    </div>
  );
}

export default Nav;