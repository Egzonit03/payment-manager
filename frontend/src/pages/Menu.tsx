import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Box, Typography, Card, CardContent, IconButton, Container, Tooltip, Button, Divider } from "@mui/material";
import { PersonOutline, AttachMoney, AddCircleOutline, BarChart, Search as SearchIcon, Event as EventIcon, Today as TodayIcon } from "@mui/icons-material";
import AppBarComponent from "../components/appBar";
import FooterComponent from "../components/Footer";
import SidebarComponent from "../components/Sidebar";
import './Menu.css';

const Menu = () => {

  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const actionsSectionRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the Actions Section
  const scrollToActions = () => {
    if(actionsSectionRef.current) {
      actionsSectionRef.current.scrollIntoView({
        behavior:'smooth',
        block:'start',
      });
    }
  };

  // Action cards
  const actions = [
    {
      title: "View All Patients",
      icon: <PersonOutline />,
      description: "See the full list of registered patients.",
      route: "/action1",
    },
    {
      title: "Search Patient",
      icon: <SearchIcon />,
      description: "Search for a specific patient by name or ID.",
      route: "/action2",
    },
    {
      title: "Add New Patient",
      icon: <AddCircleOutline />,
      description: "Register a new patient into the system.",
      route: "/action3",
    },
    {
      title: "Update Payment",
      icon: <AttachMoney />,
      description: "Update payment details for a patient.",
      route: "/action4",
    },
    {
      title: "Arrange Appointment",
      icon: <EventIcon />,
      description: "Schedule an appointment with a patient.",
      route: "/action5",
    },
    {
      title: "View Appointments",
      icon: <TodayIcon />,
      description: "See all appointments for a specific date.",
      route: "/action6",
    },
    {
      title: "Monthly Summary",
      icon: <BarChart />,
      description: "View total earnings and outstanding dues.",
      route: "/action7",
    },
  ];

  // Statistics Overview Data
  const statistics = [
    { label: "Patients", value: 120, icon: "👥" },
    { label: "Total Payments", value: 5500, icon: "💰" },
    { label: "Contracts", value: 49, icon: "📝" },
    { label: "Appointments", value: 60, icon: "📅" },
  ];

  return (
    <div className={`menu-container ${sidebarOpen ? "sidebar-open" : ""}`}>

      <AppBarComponent setSidebarOpen={setSidebarOpen}/>

      <SidebarComponent
      sidebarOpen={sidebarOpen} 
      setSidebarOpen={setSidebarOpen} />

      {/* Welcome Section */}
      <Box className="welcome-section">
        <Typography variant="h3" sx={{ fontWeight:'bold', marginBottom:'1rem'}}>
          Welcome to the Patient Manager
        </Typography>
        <Typography variant="subtitle1" sx={{marginBottom:'1.5rem'}}>
          Manage your Patients, Track Payments, and View Monthy Summaries with ease.
        </Typography>
        <Button
        variant='contained'
        onClick={scrollToActions}
        sx={{
          backgroundColor: "#2d6a4f",
          color: "#fff",
          padding: "0.8rem 2rem",
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s", "&:hover": {
            backgroundColor: "#1b4332",
            transform: "scale(1.05)",
          },
        }}
        > Get Started</Button>
      </Box>

      {/* Action Cards */}
      <Container ref={actionsSectionRef} maxWidth="lg" className="action-cards-container">
        <Box className="action-cards-wrapper">
          {actions.map((action, index) => (
            <Tooltip title={action.description} key={index}>
              <Box className="menu-action-card">
                <IconButton className="menu-action-icon" aria-label={action.title} onClick={() => navigate(action.route)}>
                  {action.icon}
                </IconButton>
                <Typography variant="h6" className="menu-action-title">
                  {action.title}
                </Typography>
                <Typography variant="body2" className="menu-action-description">
                  {action.description}
                </Typography>
              </Box>
            </Tooltip>
          ))}
        </Box>
      </Container>

      {/* Statistics Overview Section */}
      <Box className="statistics-section">
        {/* Header */}
        <Typography variant="h3" sx={{fontWeight:'bold', color:'#fff', marginBottom:'1rem'}}>
        Statistics Overview
        </Typography>
        <Typography variant="subtitle1" sx={{marginBottom:'1.5rem'}}>
        Gain insights into our key metrics and achievements.
        </Typography>

      {/* Statistics Cards */}
      <Box className="statistics-cards-container">
        {statistics.map((stat, index) => (
          <Box key={index} className="stat-card">
            <Card>
              <CardContent className="stat-card-content">
                <IconButton>{stat.icon}</IconButton>
                  <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                    {({ isVisible }: { isVisible: boolean }) => 
                    isVisible ? (
                    <Typography variant="h6" className="stat-value">
                    <CountUp start={0} end={stat.value} duration={2.5} separator="," />
                    </Typography>
                    ) : (
                    <Typography variant="h6" className="stat-value">
                    0
                    </Typography>
                    )
                    }
                    </VisibilitySensor>
                    <Typography variant="body2" className="stat-label">
                      {stat.label}
                    </Typography>
              </CardContent>
            </Card>
          </Box>
          ))}
        </Box>
      </Box>

      <FooterComponent />
      
    </div>
  );
};

export default Menu;
