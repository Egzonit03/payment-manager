import AppBarComponent from "../components/appBar";
import SidebarComponent from "../components/Sidebar";
import FooterComponent from "../components/Footer";
import { useState } from "react";
import './UpdatePayment.css';
function UpdatePayment() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={`payment-container ${sidebarOpen ? "sidebar-open" : ""}`}>
            <AppBarComponent setSidebarOpen={setSidebarOpen} />
            <SidebarComponent sidebarOpen={sidebarOpen}  setSidebarOpen={setSidebarOpen} />
            <h2 color="green">Here you can update the payment for a specific patient</h2>
            <FooterComponent />
        </div>
    )
}

export default UpdatePayment;