import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NavBar() {
    const navigate = useNavigate();
    function handleLogOut(){
        localStorage.removeItem("currentUser");
        alert("Successful");
        navigate("/login");
    }
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/task">Task</Link>
            <Link to="/notes">Notes</Link>
            <Link to="/help">Help</Link>
            <Link to="/login">Login</Link>
            <button onClick = {handleLogOut}>LogOut</button>
        </nav>
    );
}

export default NavBar;