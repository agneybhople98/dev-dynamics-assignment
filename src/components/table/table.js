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
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const DataTable = ({ data }) => {
  const theme = useTheme();
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
            <TableCell>Username</TableCell>
            <TableCell>Total Activity</TableCell>
            <TableCell>Active Days</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              className="cursor-pointer"
              key={index}
              onClick={() => handleButtonClick(item)}
            >
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.totalActivity.length}</TableCell>
              <TableCell>{item.activeDays.days}</TableCell>
              <TableCell>
                <Button
                  size="medium"
                  variant="outline"
                  color="primary"
                  onClick={() => handleButtonClick(item)}
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  View details
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
