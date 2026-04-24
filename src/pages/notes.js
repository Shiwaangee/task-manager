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

        if(content.trim() === ""){
            return;
        }    

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

    function handleDelete(id){
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const currentUser = localStorage.getItem("currentUser");

        for(let i = 0; i<users.length; i++){
            if(users[i].username === currentUser){
                // we found the user
                users[i].notes = users[i].notes.filter(eachNote => eachNote.id !== id);
                localStorage.setItem("users", JSON.stringify(users));
                setDisplayNotes(users[i].notes);
                break;
            }
        }
    }

    return (
        <div>
            <NavBar />
            {/* <h1>Notes</h1>
            <p>Here you can write and organize your notes.</p> */}
            <div className = "flex flex-col mt-20 justify-center sticky top-16">
                <div className = "flex justify-center mb-4">
                    <input 
                        placeholder = "Title" 
                        value = {titleName} 
                        onChange = {(e) => setTitleName(e.target.value)}
                        className = "border h-8 text-center hover:ring-2 hover:ring-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                </div>
                
                <div className = "flex mb-4">
                    <textarea
                        placeholder = "Write your notes here..."
                        value = {content}
                        onChange = {(e) => setContent(e.target.value)}
                        className = "border w-full mx-20 h-20 pl-2 hover:ring-2 hover:ring-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                </div>
                <div className = "flex justify-center">
                    <button onClick = {handleAddNotes} className = "border p-2 bg-white hover:bg-purple-300 hover:text-white active:scale-95 transition-transform duration-150 mb-4"> Add Notes</button>
                </div>
            </div>
            

            {displayNotes.length === 0 ? (<h5>Add your first note!!!</h5>) : (
                <ul className = "flex flex-wrap gap-4 mx-4" >
                    {
                    displayNotes.map((item) => (
                        <li key = {item.id} className = "border rounded p-4 hover:bg-purple-100">
                            <div className = "flex flex-row justify-between mb-2">
                                <h6 className = "underline decoration-1 underline-offset-2 font-semibold font-mono">{item.title}</h6>
                                <button onClick = {() => handleDelete(item.id)} className = "border px-1 text-sm hover:bg-red-400 hover:text-white hover:border-black">Delete</button>
                            </div>
                            <p className = "font-light font-serif">{item.content}</p>
                            
                        </li>
                    ))
                    }
                </ul>
            )}
        </div>
    );
}
export default Notes;