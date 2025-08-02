import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Paper,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import "./create.css";

function CreateUserForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/users", formData)
      .then(() => {
        alert("User created successfully.");
        navigate("/");
      })
      .catch((err) => console.error("Failed to create user:", err));
  };

  return (
    <Container className="createForm">
      <Paper elevation={12} className="createCard">
        <Typography variant="h5" className="formTitle">
          ➕ Create User
        </Typography>

        <TextField
          label="Name"
          variant="standard"
          className="inputField"
          fullWidth
          value={formData.name}
          onChange={(e) => handleInput("name", e.target.value)}
        />

        <TextField
          label="Username"
          variant="standard"
          className="inputField"
          fullWidth
          value={formData.username}
          onChange={(e) => handleInput("username", e.target.value)}
        />

        <TextField
          label="Email"
          variant="standard"
          className="inputField"
          fullWidth
          value={formData.email}
          onChange={(e) => handleInput("email", e.target.value)}
        />

        <TextField
          label="Phone"
          variant="standard"
          className="inputField"
          fullWidth
          value={formData.phone}
          onChange={(e) => handleInput("phone", e.target.value)}
        />

        <Button className="createBtn" onClick={handleSubmit} variant="contained">
          Create User
        </Button>
      </Paper>
    </Container>
  );
}

export default CreateUserForm;
