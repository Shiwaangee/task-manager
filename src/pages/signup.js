import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSignup(event) {
    event.preventDefault();

    // Step 1: Check for blank fields
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }

    // Step 2: Get users from localStorage
    let users = localStorage.getItem("users");
    if (users === null) {
      users = [];
    } else {
      users = JSON.parse(users);
    }

    // Step 3: Check if username already exists (using simple for loop)
    let found = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        found = true;
        break;
      }
    }

    if (found) {
      alert("Username already taken!");
      return;
    }

    // Step 4: Add new user
    let newUser = {
      username: username,
      password: password,
      notes: [],
      tasks: []
    };
    users.push(newUser);

    // Step 5: Save back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Step 6: Success message + reset
    alert("Signup successful!");
    setUsername("");
    setPassword("");
    navigate("/login");  }

  return (
    <div className="mt-40">
      <h1 className="text-3xl font-bold mb-14 flex justify-center">Sign Up</h1>
      <form onSubmit={handleSignup} className = "flex flex-col items-center gap-4 mt-10">
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className = "border text-center px-20 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 hover:ring-2 hover:ring-gray-800"
        />
        {/* <br /> */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className = "border text-center rounded-lg py-2 px-5 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:ring-2 hover:ring-gray-800"
        />
        <br />
        <button type="submit" className = "border px-2 py-1 hover:ring-2 hover:ring-gray-800 hover:bg-blue-300 hover:text-white text-lg active:scale-95 transition-transform duration-150">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;