import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import DoneIcon from "@mui/icons-material/Done";
import TimelineIcon from "@mui/icons-material/Timeline";
import UserDetails from "./user-details/user-details";

import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleClickListItem = () => {
    setOpen(!open);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: 200, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/"
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText primary="Analytics" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />

      <ListItemButton onClick={handleClickListItem}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="PR Status" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            component={Link}
            selected={selectedIndex === 2}
            to="/raised"
            sx={{ pl: 4 }}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <ArrowUpwardIcon />
            </ListItemIcon>
            <ListItemText primary="Raised" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton
            component={Link}
            selected={selectedIndex === 3}
            to="/closed"
            sx={{ pl: 4 }}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <DoneIcon />
            </ListItemIcon>
            <ListItemText sx={{ pr: 2 }} primary="Closed" />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  );
}

export default Sidebar;
