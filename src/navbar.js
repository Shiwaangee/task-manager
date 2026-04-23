import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NavBar() {
    const navigate = useNavigate();
    function handleLogOut(){
        localStorage.removeItem("currentUser");
        alert("Successful");
        navigate("/login");
    }
    function deleteAccount(){
        const currentUser = localStorage.getItem("currentUser");
        if(!currentUser){
            alert("No user is currently logged in.");
            return;
        }
        alert("Are you sure you want to delete your account? This action cannot be undone.");
        let users = JSON.parse(localStorage.getItem("users")) || [];
        

        users = users.filter(eachUser => (
            eachUser.username !== currentUser
        ));
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.removeItem("currentUser");
        navigate("/login");
    }
    return (
        // <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
        <nav className = "flex text-white bg-gray-800 px-6 py-3 justify-between items-center fixed w-full top-0 z-20">
                
                <Link to="/">Home</Link>
                <Link to="/task">Task</Link>
                <Link to="/notes">Notes</Link>
                <Link to="/help">Help</Link>
                <Link to="/login">Login</Link>
                <button onClick = {handleLogOut}>LogOut</button>
            
                <button onClick = {deleteAccount} className="text-red-500">DelAct</button>
          
        </nav>
    );
}

export default NavBar;