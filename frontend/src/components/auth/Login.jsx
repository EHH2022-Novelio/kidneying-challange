import icons from "../../icons";
import "./auth.css";
import api from "../../api";
import  { Redirect } from 'react-router-dom'


function LogIn(props) {
    
    function pushHistory(x){
        this.props.history.push(x);
    }

    const log = async () => {
        const username = document.getElementById("mail").value;
        const password = document.getElementById("password").value;

        const result = await api.login({username, password});
        console.log(result);
        if (result.username === null){
            return;
        }else{
            props.setUser(result);
            pushHistory("/");
        }

    }

    return (
        <div className="sign">
            <div>
                <h2>Log In</h2>
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
                        <button className="btn btn-success" onClick={log}>Log In</button>
                    </div>
                </div>
            </div>
            <img src=""/>
        </div>
    );
}

export default LogIn;