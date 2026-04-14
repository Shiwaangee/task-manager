import NavBar from '../navbar';
import {Link} from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function handleLogin(){
        if(username === "" || password === ""){
            alert("Enter both username and password");
            return;
        }

        // get the user string to array from localstorage
        let users = localStorage.getItem("users");
        if(users === null){
            alert("No user found. Please sign up to create an account.");
            return;
        }
        users = JSON.parse(users);

        // check whether the username matches or not
        let found = false;
        for(let i = 0; i<users.length; i++){
            if(users[i].username === username && users[i].password === password){
                found = true;
                break;
            }
        }
        //if not found go to sign up
        if(!found){
            alert("Invalid password or username. Please try again or sign up if you don't have an account.");
        }else{
            alert("Login successful!");
            setUsername("");
            setPassword("");
            localStorage.setItem("currentUser", username);
            navigate("/");
        }
    }
    return (
        <div>
            <NavBar />
            <h1>Login</h1>
            <p>Enter your username and password to access your account.</p>
                <input 
                    type = "text" 
                    placeholder="Enter Username" 
                    value = {username} 
                    onChange = {(e) => setUsername(e.target.value)}
                />
                <input 
                    type = "password" 
                    placeholder="Enter Password" 
                    value = {password} 
                    onChange = {(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            
            

            <h2>New User? Sign Up Below</h2>
            <p>If you don’t have an account yet, sign up below.</p>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
        </div>
    );
}
export default Login;

// import NavBar from '../navbar';
// import {Link} from "react-router-dom";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// function Login() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     function handleLogin(event){
//         event.preventDefault();
//         if(username === "" || password === ""){
//             alert("Enter both username and password");
//             return;
//         }

//         // get the user string to array from localstorage
//         let users = localStorage.getItem("users");
//         if(users === null){
//             alert("No user found. Please sign up to create an account.");
//             return;
//         }
//         users = JSON.parse(users);

//         // check whether the username matches or not
//         let found = false;
//         for(let i = 0; i<users.length; i++){
//             if(users[i].username === username && users[i].password === password){
//                 found = true;
//                 break;
//             }
//         }
//         //if not found go to sign up
//         if(!found){
//             alert("Invalid password or username. Please try again or sign up if you don't have an account.");
//         }else{
//             alert("Login successful!");
//             setUsername("");
//             setPassword("");
//             navigate("/home");
//         }
//     }
//     return (
//         <div>
//             <NavBar />
//             <h1>Login</h1>
//             <p>Enter your username and password to access your account.</p>
//             <form onSubmit={handleLogin}>
//                 <input 
//                     type = "text" 
//                     placeholder="Enter Username" 
//                     value = {username} 
//                     onChange = {(e) => setUsername(e.target.value)}
//                 />
//                 <input 
//                     type = "password" 
//                     placeholder="Enter Password" 
//                     value = {password} 
//                     onChange = {(e) => setPassword(e.target.value)}
//                 />
//                 <button type = "submit" >Login</button>
//             </form>
            

//             <h2>New User? Sign Up Below</h2>
//             <p>If you don’t have an account yet, sign up below.</p>
//             <Link to="/signup">
//                 <button>Sign Up</button>
//             </Link>
//         </div>
//     );
// }
// export default Login;