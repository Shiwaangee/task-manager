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
        if(newTask.trim() === ""){
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

    function handleDelete(id){
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

    function handleComplete(id){
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
                users[i].tasks =users[i].tasks.map(eachTask => (
                    eachTask.id === id ? {...eachTask, completed: !eachTask.completed} : eachTask
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
            <h1>Tasks</h1>
            <input
                type="text"
                placeholder="Enter your task here..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
            {
                displayTask.length === 0 ? <p>No tasks to display. Add a new one.</p> :
                <ul>
                    {displayTask.map((item) => (
                        <li key={item.id}>
                            {item.completed ? <s>{item.text}</s> : item.text}
                            <button onClick = {() => handleDelete(item.id)}> del</button>
                            <button onClick = {() => handleComplete(item.id)}>
                                {item.completed ? "Undo" : "Mark Complete"}
                            </button>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}
export default Task;