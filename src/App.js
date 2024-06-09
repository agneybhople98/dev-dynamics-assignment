import "./App.css";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserDetails from "./components/user-details/user-details";
import * as React from "react";

import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ContactIcon from "@mui/icons-material/ContactSupport";

import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import Badge from "@mui/material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function App() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { text: "Home", icon: <HomeIcon />, route: "/" },
          { text: "Analytics", icon: <AnalyticsIcon />, route: "/analytics" },
          {
            text: "Notifications",
            icon: <NotificationsIcon />,
            route: "/notifications",
          },
          { text: "Contact", icon: <ContactIcon />, route: "/contact" },
        ].map((text, index) => (
          <ListItem
            key={text.text}
            component={Link}
            to={text.route}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {text.icon}
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Router>
      <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Toolbar variant="dense">
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <div className="md:text-xl text-md">Dev Dynamics Assignment</div>
          </Toolbar>

          <div className="flex">
            <IconButton aria-label="email">
              <Badge badgeContent={4} color="primary">
                <EmailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="notifications">
              <Badge badgeContent={10} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ pl: 1, mb: 1 }}>
                  <AccountCircleIcon sx={{ fontSize: 32 }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </div>
        </div>
      </AppBar>

      <div className="col-span-12 md:col-span-2">
        {/* <Sidebar /> */}

        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
      <div className="grid grid-cols-12 gap-4 px-4 pt-2">
        <div className="col-span-12 mt-3 md:col-span-12">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-details" element={<UserDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
