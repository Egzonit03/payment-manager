import AppBarComponent from "../components/appBar";
import SidebarComponent from "../components/Sidebar";
import FooterComponent from "../components/Footer";
import './ViewAllPatients.css';
import { useState } from "react";
function ViewAllPatients() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={`all-patients-container ${sidebarOpen ? "sidebar-open" : ""}`}>
            <AppBarComponent setSidebarOpen={setSidebarOpen} />
            <SidebarComponent sidebarOpen={sidebarOpen}  setSidebarOpen={setSidebarOpen} />
            <h2 color="green">Here you can view all the registered patients</h2>
            <FooterComponent />
        </div>
    )
}

export default ViewAllPatients;