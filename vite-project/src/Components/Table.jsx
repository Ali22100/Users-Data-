import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Table.css";

function UserTable({ userdata }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        alert("User deleted successfully.");
        window.location.reload();
      })
      .catch((err) => console.error("Delete error:", err));
  };

  return (
    <TableContainer component={Paper} className="tableContainer">
      <Table aria-label="user table">
        <TableHead>
          <TableRow className="customTableHead">
            <TableCell className="headCell">ID</TableCell>
            <TableCell className="headCell">Name</TableCell>
            <TableCell className="headCell" align="right">
              Username
            </TableCell>
            <TableCell className="headCell" align="right">
              Email
            </TableCell>
            <TableCell className="headCell" align="right">
              Phone
            </TableCell>
            <TableCell className="headCell" align="right">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {userdata?.map((user) => (
            <TableRow key={user.id} className="bodyRow">
              <TableCell className="bodyCell">{user.id}</TableCell>
              <TableCell className="bodyCell">{user.name}</TableCell>
              <TableCell className="bodyCell" align="right">
                {user.username}
              </TableCell>
              <TableCell className="bodyCell" align="right">
                {user.email}
              </TableCell>
              <TableCell className="bodyCell" align="right">
                {user.phone}
              </TableCell>
              <TableCell className="bodyCell" align="right">
                <EditIcon
                  onClick={() => navigate(`/editUser/${user.id}`)}
                  className="actionIcon editIcon"
                />
                <DeleteIcon
                  onClick={() => handleDelete(user.id)}
                  className="actionIcon deleteIcon"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
