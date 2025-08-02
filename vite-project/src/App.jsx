import React from "react";
import { Routes, Route } from "react-router-dom";

// Screens
import UserDashboard from "./Screen/Home";
import CreateUserForm from "./Screen/Create";
import EditUserForm from "./Screen/Edit";  

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserDashboard />} />
      <Route path="/createUser" element={<CreateUserForm />} />
      <Route path="/editUser/:id" element={<EditUserForm />} />
    </Routes>
  );
}

export default App;
