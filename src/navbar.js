import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/task">Task</Link>
            <Link to="/notes">Notes</Link>
            <Link to="/help">Help</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
}

export default NavBar;