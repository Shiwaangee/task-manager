import NavBar from '../navbar';
import {Link} from "react-router-dom";
function Login() {
    return (
        <div>
            <NavBar />
            <h1>Login</h1>
            <p>Enter your username and password to access your account.</p>
            <input type = "text" placeholder="Username" disabled/>
            <input type = "password" placeholder="Password" disabled/>

            <button>Login</button>
            <h2>New User? Sign Up Below</h2>
            <p>If you don’t have an account yet, sign up below.</p>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
        </div>
    );
}
export default Login;