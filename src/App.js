// import react from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Task from './pages/task';
import Notes from './pages/notes';
import Help from './pages/help';

function App() {
  return (
    // <div>
    //   <Home />
    //   <Login />
    //   <Task />
    //   <Notes />
    //   <Help />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/task" element={<Task/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;