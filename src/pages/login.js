import NavBar from '../navbar';
function Login() {
    return (
        <div>
            <NavBar />
            <h1>Login</h1>
            <p>Enter your username and password to access your account.</p>
            <button>Login</button>
            <h2>New User? Sign Up Below</h2>
            <p>Create a new account to start managing your notes and tasks.</p>
            <button>Sign Up</button>
        </div>
    );
}
export default Login;