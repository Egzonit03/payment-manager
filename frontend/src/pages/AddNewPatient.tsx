import AppBarComponent from "../components/appBar";
import SidebarComponent from "../components/Sidebar";
import FooterComponent from "../components/Footer";
import './AddNewPatient.css';
import { useState } from "react";
import { TextField, Button, Container, Box, Card, CardContent, Typography } from "@mui/material";
function AddNewPatient() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [patient, setPatient] = useState({
        name: "",
        surname: "",
        phone: "",
        address: "",
        paymentLeft: "",
        dateRegistered: new Date().toISOString().split("T")[0], // Autofill today’s date
        email: "",
        notes: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("New Patient Data:", patient);
        alert("Patient Registered Successfully!");
      };

    return (
        <div className={`add-patient-container ${sidebarOpen ? "sidebar-open" : ""}`}>
            <AppBarComponent setSidebarOpen={setSidebarOpen} />
            <SidebarComponent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Container maxWidth="md" className="add-patient-form-container">
                <Typography variant="h3" sx={{color:'white', fontWeight:'bold'}}>📝 Register New Patient</Typography>
                <Card className="patient-form-card">
                    <CardContent>
                        <Typography variant="h4" className="form-title">Patient's Details</Typography>
                        <form onSubmit={handleSubmit}>
                            <Box className="form-fields">
                                <Box className="input-group">
                                    <TextField className="input-group" fullWidth label="Name" name="name" value={patient.name} onChange={handleChange} required />
                                    <TextField className="input-group" fullWidth label="Surname" name="surname" value={patient.surname} onChange={handleChange} required />
                                </Box>
                                <Box className="input-group">
                                    <TextField className="input-group" fullWidth label="Phone Number" name="phone" value={patient.phone} onChange={handleChange} required />
                                    <TextField className="input-group" fullWidth label="E-mail (Optional)" name="e-mail" value={patient.email} onChange={handleChange} />
                                </Box>
                                <TextField className="input-group" fullWidth label="Address" name="address" value={patient.address} onChange={handleChange} required />
                                <Box className="input-group">
                                    <TextField className="input-group" fullWidth type="number" label="Payment Left (€)" name="paymentLeft" value={patient.paymentLeft} onChange={handleChange} required />
                                    <TextField className="input-group" fullWidth type="date" label="Date Registered" name="dateRegistered" value={patient.dateRegistered} onChange={handleChange} required />
                                </Box>
                                <TextField className="input-group" fullWidth label="Comments (Optional)" name="comments" value={patient.notes} onChange={handleChange} multiline rows={3} />
                                <Box className="form-button-container">
                                    <Button type="submit" className="register-btn">Register Patient</Button>
                                </Box>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </Container>
            <FooterComponent />
        </div>
    )
}

export default AddNewPatient;