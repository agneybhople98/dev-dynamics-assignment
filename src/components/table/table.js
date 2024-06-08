import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DataTable = ({ data }) => {
  const navigate = useNavigate();
  console.log("🚀 ~ DataTable ~ data:", data);

  const handleButtonClick = (user) => {
    navigate("/user-details", { state: { user } });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Total Activity</TableCell>
            <TableCell>Active Days</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.totalActivity.length}</TableCell>
              <TableCell>{item.activeDays.days}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleButtonClick(item)}
                >
                  View More
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
