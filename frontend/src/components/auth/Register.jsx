import icons from "../../icons";
import "./auth.css";
import api from "../../api";

function Sign(props) {
    
    const Register = async () => {
        const username = document.getElementById("mail").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        if (password === confirmPassword){
            const result = await api.register({username, password});
            console.log(result);
            if (result !== undefined){
                console.log(result);
                props.setUser(result);
                this.props.history.push("/");
            }
        }
    }

    return (
        <div className="sign">
            <div>
                <h2>Sign Up</h2>
                <div className="restSign">
                    <div>
                        <label htmlFor="mail">Mail</label>
                        <input type="email" className="form-control" name="mail" id="mail" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" id="password" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" />
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