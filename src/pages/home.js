// import react from 'react';
import NavBar from '../navbar';
function Home() {
    const currentUser = localStorage.getItem("currentUser");
    return (
        <div>
            <NavBar />
            <h1>Welcome {currentUser ? `, ${currentUser}` : ""}</h1>
            <div>
                <p>
                    You can manage your tasks, create notes, and always come back to
                    continue. If you want a guide to understand how to use the site,
                    please go to the Help section.
                </p>
            </div>

        </div>
    );
}

export default Home;