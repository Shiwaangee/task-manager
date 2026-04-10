import React from 'react';
function Signup(){
    return (
        <div>
            <h1>Signup </h1>
            <p>Create a new account to start managing your notes and tasks.</p>
            <input type="text" placeholder="Choose Username" disabled />
            <input type="password" placeholder="Choose Password" disabled />
            <button>Create Account</button>
        </div>
    );
}
export default Signup;