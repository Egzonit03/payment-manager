import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box, Tooltip, Button } from "@mui/material";
import { Menu as MenuIcon, Notifications, AccountCircle } from "@mui/icons-material";
import ReplyIcon from '@mui/icons-material/Reply';
import './appBar.css'; 

const AppBarComponent = ({ setSidebarOpen }: { setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{backgroundColor:'#344e41', marginBottom:'50px', display:'flex', paddingLeft:'20px', paddingRight:'20px'}}>
      <Toolbar className="app-bar-toolbar">
        {/* Menu Icon */}
        <Box className="menu-icon-container">
          <Tooltip title="Open Sidebar">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setSidebarOpen(true)}
              className="menu-icon-button"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Typography variant="h5" className="app-title" onClick={() => navigate('/menu')}>
            Patient Manager
          </Typography>
        </Box>

        {/* Right Actions */}
        <Box className="right-actions">
          <Tooltip title="Notifications">
            <IconButton className="action-icon" color="inherit" sx={{transition: 'transform 0.3s ease, color 0.3s ease'}}>
              <Notifications fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Account">
            <IconButton className="action-icon" color="inherit" sx={{transition: 'transform 0.3s ease, color 0.3s ease'}}>
              <AccountCircle fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Return">
            <IconButton className="action-icon" color="inherit" sx={{transition: 'transform 0.3s ease, color 0.3s ease'}} onClick={() => navigate('/menu')}>
              <ReplyIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title='Sign-Out'>
          <Button variant="contained" color="inherit" onClick={() => navigate('/register')}
          sx={{color: 'black', fontWeight: 'bold', borderRadius: '20px', 
               padding: '5px 15px', textTransform: 'none', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.2)', 
               transition: 'all 0.3s ease'}} className="sign-out-button">
            Sign Out
          </Button>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
