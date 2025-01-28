import { useState } from "react";
import AppBarComponent from "../components/appBar";
import SidebarComponent from "../components/Sidebar";
import FooterComponent from "../components/Footer";
import './ArrangeAnAppointment.css';
function ArrangeAnAppointment() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className={`arrange-appointment-container ${sidebarOpen ? "sidebar-open" : ""}`}>
            
            <AppBarComponent setSidebarOpen={setSidebarOpen} />
            <SidebarComponent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <h2 color="green">Here you can arrange an appointment with a patient on a specific date</h2>
            <FooterComponent />
        </div>
    )
}

export default ArrangeAnAppointment;