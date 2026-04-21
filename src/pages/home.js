// import react from 'react';
import NavBar from '../navbar';
function Home() {
    const currentUser = localStorage.getItem("currentUser");
    return (
        <div className="bg-gray-100 min-h-screen ">
            <NavBar />
            <div className="flex flex-col items-center min-h-screen justify-center ">
                <h1 className="text-gray-800">Welcome {currentUser ? `, ${currentUser}` : ""}</h1>
                <p className="text-gray-600">
                    You can manage your tasks, create notes, and always come back to
                    continue. If you want a guide to understand how to use the site,
                    please go to the Help section.
                </p>
            </div>

        </div>
    );
}

export default Home;