import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Paper,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import "./edit.css";

function EditUserForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Failed to fetch user:", err));
  }, [id]);

  const handleInput = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const updateUser = () => {
    axios
      .put(`http://localhost:3000/users/${id}`, user)
      .then(() => {
        alert("User updated successfully.");
        navigate("/");
      })
      .catch((err) => console.error("Failed to update user:", err));
  };

  return (
    <Container className="editForm">
      <Paper elevation={12} className="editCard">
        <Typography variant="h5" className="formTitle">
          ✏️ Edit User
        </Typography>

        <TextField
          label="Name"
          variant="standard"
          className="editInput"
          value={user.name || ""}
          onChange={(e) => handleInput("name", e.target.value)}
          fullWidth
        />

        <TextField
          label="Username"
          variant="standard"
          className="editInput"
          value={user.username || ""}
          onChange={(e) => handleInput("username", e.target.value)}
          fullWidth
        />

        <TextField
          label="Email"
          variant="standard"
          className="editInput"
          value={user.email || ""}
          onChange={(e) => handleInput("email", e.target.value)}
          fullWidth
        />

        <TextField
          label="Phone"
          variant="standard"
          className="editInput"
          value={user.phone || ""}
          onChange={(e) => handleInput("phone", e.target.value)}
          fullWidth
        />

        <Button
          variant="contained"
          className="editBtn"
          onClick={updateUser}
        >
          Update User
        </Button>
      </Paper>
    </Container>
  );
}

export default EditUserForm;
