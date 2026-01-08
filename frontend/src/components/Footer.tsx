import { Box, Typography, Link, Tooltip, IconButton } from '@mui/material';
import { Info, HelpOutline, ContactMail, Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import './Footer.css';

function FooterComponent() {
    return (
        <div className='footer-container'>
        <Box className='tips-links'>
            {/** Tips Section */}
            <Box sx={{marginTop:'25px'}}>
                <Typography variant='h4' sx={{marginBottom:'10px', color:'#000'}}>
                    Quick Tips
                </Typography>
                <Typography variant='body1' className='footer-text'>
                    <Info fontSize='small' className='footer-icon' />
                    Click on the Menu options to navigate easily.
                </Typography>
                <Typography variant='body1' className='footer-text'>
                    <HelpOutline fontSize='small' className='footer-icon' />
                    Use the Search Bar to quickly find patients or records.
                </Typography>
                <Typography variant='body1' className='footer-text'>
                    <ContactMail fontSize='small' className='footer-icon' />
                    Contact support for any issues you may encounter.
                </Typography>
                <Typography variant='body1' className='footer-text'>
                    <AdsClickIcon fontSize='small' className='footer-icon' />
                    Click on the title of the app or on the 'return' button to go back to the Menu page.
                </Typography>
            </Box>

            {/** Links Section */}
            <Box sx={{marginTop:'25px'}}>
                <Typography variant='h4' sx={{marginBottom:'10px', color:'#000'}}>
                    Useful Links
                </Typography>
                <Link href='/help' className='footer-link' color='#fff'>
                Help Center
                </Link>
                <Link href='/contact' className='footer-link' color='#fff'>
                Contact Us
                </Link>
                <Link href='/privacy' className='footer-link' color='#fff'>
                Privacy Policy
                </Link>
                <Link href='/terms' className='footer-link' color='#fff'>
                Terms of Service
                </Link>
            </Box>
        </Box>
            {/** Social Media Section */}
            <Box className='footer-social'>
                <Typography variant='body1' sx={{color:'#fff', marginRight:'10px', fontSize:'1.5rem'}}>
                    Follow Us:
                </Typography>
                <Tooltip title='Facebook'>
                    <IconButton href='https://facebook.com' target='_blank' className='footer-social-icon'>
                    <Facebook />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Twitter'>
                    <IconButton href='https://twitter.com' target='_blank' className='footer-social-icon'>
                    <Twitter />
                    </IconButton>
                </Tooltip>
                <Tooltip title='LinkedIn'>
                    <IconButton href='https://linkedin.com' target='_blank' className='footer-social-icon'>
                    <LinkedIn />
                    </IconButton>
                </Tooltip>
            </Box>

            {/** Copyright Section */}
            <Box className='footer-copyright'>
                <Typography variant='body1' color='textSecondary'>
                    © {new Date().getFullYear()} Payment Manager. All rights reserved.
                </Typography>
            </Box>
        </div>
    );
}

export default FooterComponent;