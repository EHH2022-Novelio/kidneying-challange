import icons from "../../icons";
import "./auth.css";
import api from "../../api";
import  { useNavigate } from 'react-router-dom';

function Sign(props) {

    const history = useNavigate();
    
    const Register = async () => {
        const username = document.getElementById("mail").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const smoker = document.getElementById("smoking").value === "yes";
        if (password === confirmPassword){
            const result = await api.register({username, password, smoker});
            console.log(result);
            if (result !== undefined){
                console.log(result);
                props.setUser(result);
                history("/");
            }
        }
    }

    async function logWithTest(){
        const result = {username: "Hanna Montana", password: "31otuzbir31os1"};

        props.setUser(result);
        history("/");
    }

    return (
        <div className="sign">
            <div>
                <h2>Sign Up</h2>
                <button onClick={logWithTest} className="instantLogIn btn btn-outline-info">Login with test account</button>
                <div className="restSign">
                    <div>
                        <label htmlFor="mail">User Name</label>
                        <input type="text" className="form-control" name="mail" id="mail" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" id="password" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" />
                    </div>
                    <div>
                        <label htmlFor="smoking">Are you smoking: </label>
                        <select name="smoking" className="form-control" id="smoking">
                            <option value="no">no</option>
                            <option value="yes">yes</option>
                        </select>
                        
                    </div>
                    <div className="submit">
                        <a className="hrefButton" href="/login">I have an account</a>
                        <button className="btn btn-success" onClick={Register}>Register</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Sign;