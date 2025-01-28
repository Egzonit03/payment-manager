import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
function Welcome() {
    const navigate = useNavigate();
    return (
        <div className="welcome-container">
        <h1>Welcome to the EGZO world! Thank you for choosing us to work with</h1>
        <Button variant='contained' onClick={() => navigate('/register')}>Let's get started</Button>
        </div>
    )
}

export default Welcome;