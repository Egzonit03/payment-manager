import AppBarComponent from "../components/appBar";
import SidebarComponent from "../components/Sidebar";
import FooterComponent from "../components/Footer";
import './ViewAppointments.css';
import { useState } from "react";
function ViewAppointments() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={`view-appointments-container ${sidebarOpen ? "sidebar-open" : ""}`}>
            <AppBarComponent setSidebarOpen={setSidebarOpen} />
            <SidebarComponent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <h2 color="dark-green">Here you can view all appointments for a specific day</h2>
            <FooterComponent />
        </div>
    )
}

export default ViewAppointments;