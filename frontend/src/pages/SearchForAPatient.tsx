import AppBarComponent from "../components/appBar";
import SidebarComponent from "../components/Sidebar";
import FooterComponent from "../components/Footer";
import { useState } from "react";
import './SearchForAPatient.css';
function SearchForAPatient() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={`search-patient-container ${sidebarOpen ? "sidebar-open" : ""}`}>
            <AppBarComponent setSidebarOpen={setSidebarOpen} />
            <SidebarComponent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <h2 color="green">Here you can search for a specific patient</h2>
            <FooterComponent />
        </div>
    )
}

export default SearchForAPatient;