import './App.css';
import Login from './components/Login'
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import EditUser from './components/EditUser';

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/edituser" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
