import icons from "../../icons";
import "./auth.css";

function Sign() {

    const Register = () => {
        const username = document.getElementById("mail").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        if (password === confirmPassword){
            
        }
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
                <div>
                    <label htmlFor="confirmPassword">Confirrm Email</label>
                    <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" />
                </div>
                <div className="submit">
                    <a href="/Login">I have an account</a>
                    <button className="btn btn-primary" onClick={Register}>Register</button>
                </div>
                
            </div>
        </div>
    );
}

export default Sign;