import icons from "../../icons";
import "./auth.css";
import api from "../../api";
import  { useNavigate } from 'react-router-dom';


function LogIn(props) {

    let history = useNavigate();

    const log = async () => {
        const username = document.getElementById("mail").value;
        const password = document.getElementById("password").value;

        const result = {username: "James Bond", password: "askld123as4djksalkmd"};
        console.log(result);
        if (result.username === null){
            return;
        }else{
            props.setUser(result);
            history("/");
        }

    }

    async function logWithTest(){
        const result = {username: "James Bond", password: "askld123as4djksalkmd"};

        props.setUser(result);
        history("/");
    }

    return (
        <div className="sign">
            <div>
                <h2>Log In</h2>
                <button onClick={logWithTest} className="instantLogIn btn btn-outline-info">Login with test account</button>
                <div className="restSign">
                    <div>
                        <label htmlFor="mail">Email</label>
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