// src/Screens/UserDashboard.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserTable from "../Components/Table";
import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Home.css";   // ⬅ custom style file

function UserDashboard() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  /* ─── Separate helper ─── */
  async function fetchUsers() {
    try {
      const { data } = await axios.get("http://localhost:3000/users");
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  /* ─── Mount effect ─── */
  useEffect(() => {
    fetchUsers();
  }, []);

  /* ─── UI ─── */
  return (
    <Container maxWidth="lg" className="dashRoot">
      <Button
        className="primaryBtn"
        onClick={() => navigate("/createUser")}
      >
        + Create&nbsp;User
      </Button>

      {/* Table of users */}
      <Box sx={{ mt: 4 }}>
        <BasicTable userdata={users} />
      </Box>
    </Container>
  );
}

export default UserDashboard;
