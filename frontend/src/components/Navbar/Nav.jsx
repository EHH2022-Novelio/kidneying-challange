import './Nav.css';
import {Link} from "react-router-dom"

function Nav(props) {
  return (
    <div className="Nav">
        <Link to="/" className='logA'><div className="logo">Novelia</div></Link>
        <div className={props.logged === true ? "" : "notLogged"}>
          <div className="listOfNavItems">
              <button className="item1 btn navBtn">Title 1</button>
              <button className="item2 btn navBtn">Title 2</button>
              <button className="item3 btn navBtn">Title 3</button>
              <button className="item4 btn navBtn">Title 4</button>
              <button className="item4 btn navBtn">Title 5</button>
          </div>
        </div>
        <Link className='loginLink logA' to="/login">Log In</Link>
    </div>
  );
}

export default Nav;