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
import { useState } from "react";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Dashboard() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activityData, setActivityData] = React.useState(dummyData);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const rows = activityData.data.AuthorWorklog.rows;

  // Filter rows based on the search query
  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <React.Fragment>
      <div className="flex items-center justify-between ">
        <div>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

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

      {/* All the main components */}

      <Box sx={{ mt: 2, mb: 5 }}>
        {filteredRows.length > 0 ? (
          <DataTable data={filteredRows} />
        ) : (
          <div className="text-center h-[300px] flex justify-center items-center border-2 border-white">
            No search results found
          </div>
        )}
      </Box>
    </React.Fragment>
  );
}

export default Dashboard;
