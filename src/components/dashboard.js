import SearchBar from "./searchbar";
import * as React from "react";
import Badge from "@mui/material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import dummyData from "../datas/sample-data.json";
import DataTable from "./table/table";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Dashboard() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activityData, setActivityData] = React.useState(dummyData);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <div className="flex items-center justify-between ">
        <div>
          <SearchBar />
        </div>

        {/* <ActivityData data={activityData.data.AuthorWorklog.rows} /> */}

        <div className="flex items-center gap-1">
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
          {/* <IconButton aria-label="profile">
          <AccountCircleIcon />
        </IconButton> */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ pl: 1, mb: 1 }}>
                <AccountCircleIcon sx={{ fontSize: 32 }} />
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
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

      {/* All the main components */}

      <Box sx={{ mt: 2, mb: 5 }}>
        <Typography variant="h6" gutterBottom>
          Dashboard
        </Typography>

        <DataTable data={activityData.data.AuthorWorklog.rows} />
      </Box>
    </React.Fragment>
  );
}

export default Dashboard;
