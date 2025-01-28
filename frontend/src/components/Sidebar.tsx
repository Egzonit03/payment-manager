import React from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Divider, IconButton } from "@mui/material";
import { Close, People, PersonAdd, Payment, Search, Event, CalendarMonth, Summarize, Settings, Info, ContactMail} from "@mui/icons-material";
import './Sidebar.css';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarComponent: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {

  const navigate = useNavigate();

  const actions = [
    { icon: <People />, title: "View All Patients", route: "/action1" },
    { icon: <Search />, title: "Search for a Patient", route: "/action2" },
    { icon: <PersonAdd />, title: "Add New Patient", route: "/action3" },
    { icon: <Payment />, title: "Update Payment", route: "/action4" },
    { icon: <Event />, title: "Arrange an Appointment", route: "/action5" },
    { icon: <CalendarMonth />, title: "View Appointments", route: "/action6" },
    { icon: <Summarize />, title: "Monthly Summary", route: "/action7" },
  ];

  return (
    <Drawer
      open={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
      className="sidebar-drawer"
    >
      <Box className="sidebar-container">
        {/* Sidebar Header */}
        <Box className="sidebar-header">
          <Typography variant="h6" className="sidebar-title">
            Menu
          </Typography>
          <IconButton onClick={() => setSidebarOpen(false)} className="sidebar-close-btn">
            <Close />
          </IconButton>
        </Box>

        <Divider className="sidebar-divider" />

        {/* Navigation Links */}
        <List className="sidebar-list">
          {actions.map((action, index) => (
            <ListItemButton className="sidebar-list-item" key={index} onClick={() => navigate(action.route)}>
              <ListItemIcon className="sidebar-icon">{action.icon}</ListItemIcon>
              <ListItemText primary={action.title} className="sidebar-text" />
            </ListItemButton>
          ))}
        </List>

        <Divider className="sidebar-divider" />

         {/* Additional Links */}
         <List className="sidebar-footer">
          <ListItemButton className="sidebar-list-item" onClick={() => navigate('/settings')}>
            <ListItemIcon className="sidebar-icon">
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" className="sidebar-text" />
          </ListItemButton>
          <ListItemButton className="sidebar-list-item" onClick={() => navigate('/about')}>
            <ListItemIcon className="sidebar-icon">
              <Info />
            </ListItemIcon>
            <ListItemText primary="About Us" className="sidebar-text" />
          </ListItemButton>
          <ListItemButton className="sidebar-list-item" onClick={() => navigate('/contact')}>
            <ListItemIcon className="sidebar-icon">
              <ContactMail />
            </ListItemIcon>
            <ListItemText primary="Contact Us" className="sidebar-text" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default SidebarComponent;

