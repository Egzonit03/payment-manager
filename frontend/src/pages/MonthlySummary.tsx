import AppBarComponent from "../components/appBar";
import SidebarComponent from "../components/Sidebar";
import FooterComponent from "../components/Footer";
import './MonthlySummary.css';
import { useState } from "react";
function MonthlySummary() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className={`summary-container ${sidebarOpen ? "sidebar-open" : ""}`}>
        <AppBarComponent setSidebarOpen={setSidebarOpen} />

        <SidebarComponent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <h2 color="green">Here you can have a summary of the earnings on a specific month</h2>

        <FooterComponent />
        </div>
    )
}

export default MonthlySummary;