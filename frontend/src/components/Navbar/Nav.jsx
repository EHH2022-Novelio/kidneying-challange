import './Nav.css';

function Nav(props) {
  return (
    <div className="Nav">
        <div className="logo">Novelia</div>
        <div className={props.logged === true ? "" : "notLogged"}>
          <div className="listOfNavItems">
              <button className="item1 btn navBtn">Title 1</button>
              <button className="item2 btn navBtn">Title 2</button>
              <button className="item3 btn navBtn">Title 3</button>
              <button className="item4 btn navBtn">Title 4</button>
              <button className="item4 btn navBtn">Title 5</button>
          </div>
        </div>
        <div className={props.logged === true ? "" : "notLogged"}>
          <button className="btn btn-primary btnGo">Login</button>
        </div>
    </div>
  );
}

export default Nav;