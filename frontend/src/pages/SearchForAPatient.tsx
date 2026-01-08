import AppBarComponent from "../components/appBar";
import SidebarComponent from "../components/Sidebar";
import FooterComponent from "../components/Footer";
import { useState } from "react";
import "./SearchForAPatient.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  Box
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

// Sample patient data for testing
const patientsData = [
  { id: "001", name: "John", surname: "Doe", phone: "123-456-789", address: "123 Street, NY", paymentLeft: "$100", registeredDate: "2024-01-10" },
  { id: "002", name: "Jane", surname: "Smith", phone: "987-654-321", address: "456 Avenue, LA", paymentLeft: "$200", registeredDate: "2024-02-15" },
  { id: "003", name: "Michael", surname: "Brown", phone: "555-777-999", address: "789 Blvd, TX", paymentLeft: "$0", registeredDate: "2024-03-05" }
];

function SearchForAPatient() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);  // Initially false, dialog opens on button click
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState<any | null>(null);
  const [error, setError] = useState("");

  // Handle search
  const handleSearch = () => {
    const query = searchId.trim().toLowerCase();
    const foundPatient = patientsData.find(
      (p) => p.id.trim().toLowerCase() === query
    );
    if (foundPatient) {
      setSearchResult(foundPatient);
      setError("");
    } else {
      setSearchResult(null);
      setError("Patient not found. Please check the ID and try again.");
    }
    setSearchId(""); // Clear the input field after search
    setOpen(false);  // Close the dialog
  };

  return (
    <div className={`search-patient-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <AppBarComponent setSidebarOpen={setSidebarOpen} />
      <SidebarComponent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Container maxWidth="lg" className="search-patient-data-container">
        <Typography variant="h2" className="search-header">
          🔍 Search for a Patient
        </Typography>
        <Typography variant="h5" className="search-description">
          Enter the Patient ID to search for a specific patient in the system.
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<SearchIcon />} 
          className="search-btn" 
          onClick={() => setOpen(true)}
        >
          Start Search
        </Button>

        {/* Display error message in main container (when dialog is closed) */}
        {error && !open && (
          <Typography variant="body2" className="error-message">
            {error}
          </Typography>
        )}

        {/* Search Dialog */}
        <Dialog open={open} onClose={() => setOpen(false)} className="search-dialog" maxWidth="sm" fullWidth>
          <DialogTitle className="dialog-title">Search Patient by ID</DialogTitle>
          <DialogContent className="dialog-content">
            <TextField
              label="Enter Patient ID"
              variant="outlined"
              fullWidth
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="search-input"
            />
          </DialogContent>
          <DialogActions className="dialog-actions">
            <Button onClick={() => { setOpen(false); setSearchId(""); setError(""); }} className="cancel-btn" startIcon={<CloseIcon />}>
              Cancel
            </Button>
            <Button onClick={handleSearch} variant="contained" className="search-dialog-btn">
              Search
            </Button>
          </DialogActions>
        </Dialog>

        {/* Search Results Table */}
        {searchResult && (
          <Box className="patient-data-details-container">
            <TableContainer component={Paper} className="patient-data-table-container">
              <Table>
                <TableHead>
                  <TableRow className="patient-data-table-header">
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
                  <TableRow className="patient-data-table-row">
                    <TableCell>{searchResult.id}</TableCell>
                    <TableCell>{searchResult.name}</TableCell>
                    <TableCell>{searchResult.surname}</TableCell>
                    <TableCell>{searchResult.phone}</TableCell>
                    <TableCell>{searchResult.address}</TableCell>
                    <TableCell className="payment-cell">{searchResult.paymentLeft}</TableCell>
                    <TableCell>{searchResult.registeredDate}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Container>
      <FooterComponent />
    </div>
  );
}

export default SearchForAPatient;
