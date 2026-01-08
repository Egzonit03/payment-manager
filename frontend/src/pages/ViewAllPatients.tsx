import AppBarComponent from "../components/appBar";
import SidebarComponent from "../components/Sidebar";
import FooterComponent from "../components/Footer";
import './ViewAllPatients.css';
import { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Typography, Container } from '@mui/material';
import { AddCircleOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Sample data for testing
const patientsData = [
    { id: "001", name: "John", surname: "Doe", phone: "123-456-789", address: "123 Street, NY", paymentLeft: "$100", registeredDate: "2024-01-10" },
    { id: "002", name: "Jane", surname: "Smith", phone: "987-654-321", address: "456 Avenue, LA", paymentLeft: "$200", registeredDate: "2024-02-15" },
    { id: "003", name: "Michael", surname: "Brown", phone: "555-777-999", address: "789 Blvd, TX", paymentLeft: "$0", registeredDate: "2024-03-05" }
  ];


function ViewAllPatients() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const filteredPatients = patientsData.filter(
        (patient) => patient.name.toLocaleLowerCase().includes(search.toLowerCase()) || patient.id.includes(search)
    );

    return (
        <div className={`all-patients-container ${sidebarOpen ? "sidebar-open" : ""}`}>
            <AppBarComponent setSidebarOpen={setSidebarOpen} />
            <SidebarComponent sidebarOpen={sidebarOpen}  setSidebarOpen={setSidebarOpen} />
            <Container maxWidth="lg" className="patients-table-container">
                <Typography variant="h4" className="patient-table-header">📋 All Patients</Typography>
                <div className="patients-table-top-bar">
                    <TextField
                    label="Search by Name or ID"
                    variant="outlined"
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="patient-table-search-bar"
                    />
                    <Button onClick={() => navigate('/action3')} variant="contained" startIcon={<AddCircleOutline />} className="add-btn">
                    Add New Patient
                    </Button>
                </div>
                <TableContainer component={Paper} className="patient-table-container">
                    <Table>
                        <TableHead>
                            <TableRow className="patient-table-header">
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Surname</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Payment Left</TableCell>
                                <TableCell>Date Registered</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredPatients.length > 0 ? (
                                filteredPatients.map((patient) => (
                                    <TableRow key={patient.id} className="patient-table-row">
                                        <TableCell>{patient.id}</TableCell>
                                        <TableCell>{patient.name}</TableCell>
                                        <TableCell>{patient.surname}</TableCell>
                                        <TableCell>{patient.phone}</TableCell>
                                        <TableCell>{patient.address}</TableCell>
                                        <TableCell className="payment-cell">{patient.paymentLeft}</TableCell>
                                        <TableCell>{patient.registeredDate}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={7} className="no-results">No patients found</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <FooterComponent />
        </div>
    );
}

export default ViewAllPatients;