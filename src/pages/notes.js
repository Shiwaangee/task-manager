import NavBar from '../navbar';
import { useState, useEffect} from 'react';
function Notes() {
    const [titleName, setTitleName] = useState("");
    const [content, setContent] = useState("");
    const [displayNotes, setDisplayNotes] = useState([]);

    useEffect((() => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const currentUser = localStorage.getItem("currentUser");

        for(let i = 0; i<users.length; i++){
            if(users[i].username === currentUser){
                setDisplayNotes(users[i].notes);
                break;
            }
        }

    }), [])

    function handleAddNotes(){
        // get the user 
        // get the string converted to usable form
        // get the currentUser
        // find the exact user
        // push the current note in the notes array of the user
        // but make the current note before pushing
        // - an object with title, content, createdAt, id(for our use, traversing)
        
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const currentUser = localStorage.getItem("currentUser");

        for(let i = 0; i<users.length; i++){
            if(users[i].username === currentUser){
                // we got the exact user
                const notesObj = {
                    id: Date.now(),
                    title: titleName,
                    content: content,
                    createdAt: new Date().toISOString()
                };
                users[i].notes.push(notesObj);
                localStorage.setItem("users", JSON.stringify(users));
                setDisplayNotes(users[i].notes);
                setContent("");
                setTitleName("");
                break;
            }
        }
    }

    return (
        <div>
            <NavBar />
            <h1>Notes</h1>
            <p>Here you can write and organize your notes.</p>
            <input 
                placeholder = "Title" 
                value = {titleName} 
                onChange = {(e) => setTitleName(e.target.value)}
            />
            <textarea
                placeholder = "Write your notes here..."
                value = {content}
                onChange = {(e) => setContent(e.target.value)}
            />
            <button onClick = {handleAddNotes}> Add Notes</button>

            {displayNotes.length === 0 ? (<h5>Add your first note!!!</h5>) : (
                <ul>
                    {
                    displayNotes.map((item) => (
                        <li key = {item.id}>
                            <h6>{item.title}</h6>
                            <p>{item.content}</p>
                        </li>
                    ))
                    }
                </ul>
            )}
        </div>
    );
}
export default Notes;