import { useNavigate } from "react-router-dom";
import { Button, Typography} from "@mui/material";
import StartIcon from "@mui/icons-material/Start";
import logo from '../assets/logo_transparent.png';
import './Welcome.css';

function Welcome() {
    const navigate = useNavigate();
    return (
        <div className="welcome-container">
            <div className="logo-container">
            <img src={logo} alt="EGZO logo" className="logo" />
            </div>
            <Typography variant="h1" component="h1" className="welcome-title">
                Welcome to <span className="highlight">EGZO</span>
            </Typography>
            <div className="welcome-description">
            <Typography variant="h5" className="welcome-description-text">
                Powering businesses with cutting-edge solutions.
            </Typography>
            <Typography variant="h5" className="welcome-description-text">
                Thank you for choosing EGZO to drive innovation and efficiency in your company.
            </Typography>
            <Typography variant="h5" className="welcome-description-text">
                Let's build the future, together!
            </Typography>
            </div>
            <Button
            variant="contained"
            startIcon={<StartIcon />}
            className="welcome-button"
            onClick={() => navigate('/register')}>
                Get Started
            </Button>
        </div>
    );
}

export default Welcome;