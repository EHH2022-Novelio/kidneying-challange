import icons from "../../icons";
import "./auth.css";

function LogIn(props) {

    const log = () => {
        const username = document.getElementById("mail").value;
        const password = document.getElementById("password").value;

        
    }

    return (
        <div className="sign">
            <div className="restSign">
                <div>
                    <label htmlFor="mail">Mail</label>
                    <input type="email" className="form-control" name="mail" id="mail" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" />
                </div>
                <div className="submit">
                    <a href="/password">Forgot my password</a>
                    <button className="btn btn-primary" onClick={log}>Log In</button>
                </div>
                
            </div>
        </div>
    );
}

export default LogIn;