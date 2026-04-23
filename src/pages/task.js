import NavBar from '../navbar';
import { useState, useEffect } from 'react';

function Task() {
    const [newTask, setNewTask] = useState("");
    const [displayTask, setDisplayTask] = useState([]);

    useEffect(() => {
        const currentUser = localStorage.getItem("currentUser");
        const users = JSON.parse(localStorage.getItem("users")) || [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === currentUser) {
                setDisplayTask(users[i].tasks);
                break;
            }
        }
    }, []);

    function handleAddTask() {
        if (newTask.trim() === "") {
            return;
        }
        const currentUser = localStorage.getItem("currentUser");
        const users = JSON.parse(localStorage.getItem("users")) || [];

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === currentUser) {
                // this is the user
                const newTaskObj = {
                    id: Date.now(),
                    text: newTask,
                    createdAt: new Date().toISOString(),
                    completed: false
                };
                users[i].tasks.push(newTaskObj);
                localStorage.setItem("users", JSON.stringify(users));
                setDisplayTask(users[i].tasks);
                setNewTask("");
                break;
            }
        }
    }

    function handleDelete(id) {
        const currentUser = localStorage.getItem("currentUser");
        const users = JSON.parse(localStorage.getItem("users")) || [];

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === currentUser) {
                users[i].tasks = users[i].tasks.filter(eachTask => eachTask.id !== id);
                localStorage.setItem("users", JSON.stringify(users));
                setDisplayTask(users[i].tasks);
                break;
            }
        }

    }

    function handleComplete(id) {
        const currentUser = localStorage.getItem("currentUser");
        const users = JSON.parse(localStorage.getItem("users")) || [];

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === currentUser) {
                // we got the user 
                // go to task array of user
                // find the task set its complete

                // users[i].tasks = users[i].tasks.map(eachTask => {
                //     if(eachTask.id === id){
                //         return {...eachTask, completed: !eachTask.completed};
                //     }
                //     return task;
                // });
                users[i].tasks = users[i].tasks.map(eachTask => (
                    eachTask.id === id ? { ...eachTask, completed: !eachTask.completed } : eachTask
                ));
                localStorage.setItem("users", JSON.stringify(users));
                setDisplayTask(users[i].tasks);
                break;
            }
        }
    }
    return (
        <div>
            <NavBar />
            {/* <h1>Tasks</h1> */}
            <div className="flex flex-col justify-center mt-20 ml-14 mr-14 sticky top-16 z-10">
                <input
                    type="text"
                    placeholder="Enter your task here..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="flex-grow px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 hover:ring-2 hover:ring-gray-800"
                />
                <div className="flex justify-center">
                    <button onClick={handleAddTask} className="mt-6 px-5 py-2  hover:bg-blue-300 text-lg border hover:text-white active:scale-95 transition-transform duration-150">Add Task</button>
                </div>
            </div>

            {
                displayTask.length === 0 ? <p>No tasks to display. Add a new one.</p> :
                    <ul className="list-decimal ml-7">
                        {displayTask.map((item) => (
                            <li key={item.id} className="pr-4 mb-4 border-l border-b-4 pl-2 pb-2 text-[17px] hover:bg-blue-100 ">
                                {item.completed ? (<s className = "break-words font-sans font-medium decoration-1 ">{item.text}</s>) : <span className="break-words font-serif font-medium">{item.text}</span>}
                                <div className = "mt-2">
                                    <button className="border mr-4 p-1 text-sm hover:bg-red-200 hover:border-black" onClick={() => handleDelete(item.id)}>delete</button>
                                    <button className="border p-1 text-sm hover:bg-green-200 hover:border-black" onClick={() => handleComplete(item.id)}>
                                        {item.completed ? "Undo" : "Mark Complete"}
                                    </button>
                                </div>
                                
                            </li>
                        ))}
                    </ul>
            }
        </div>
    );
}
export default Task;