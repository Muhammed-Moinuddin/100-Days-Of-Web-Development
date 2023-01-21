
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import Box from '@mui/material/Box';
import {Typography, Button,  Icon} from '@mui/material';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Stack } from '@mui/system';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://www.saylaniwelfare.com/en">
        Saylani Welfare Trust
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (

      <Box
        component="footer"
        sx={{
           
          borderTop: 1,  
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Stack direction='row'>
        <Container maxWidth="sm">
          <Typography variant="body1" sx={{paddingBottom:"15px"}}>
            Follow Us On.
          </Typography>
          <a href="https://www.facebook.com/SaylaniMassTraining/" target='_blank'><FacebookIcon fontSize="large" sx={{color: 'blue'}}/></a>
          <a href="https://www.youtube.com/@SaylaniWelfareTrustOfficial" target='_blank'><YouTubeIcon fontSize="large" sx={{color: 'red'}}/></a>
          <a href="https://www.facebook.com/SaylaniMassTraining/" target='_blank'><InstagramIcon fontSize="large" /></a>
        </Container>
        <Container maxWidth="sm">
            
            <Typography variant="body1" sx={{paddingTop:"25px"}}>
            Visit Saylani Welfare Website.
          </Typography>
          <Copyright />
        </Container>
        <Container maxWidth="sm">
          <Typography variant="body1">
            Contact Us
          </Typography>
          <Typography variant="body2" color="text.secondary">A-25, Bahadurabad Chowrangi Karachi, Pakistan</Typography>
          <Typography variant="body2" color="text.secondary">UAN: 111-729-526 (+0092-213)4130786-90</Typography>
          <Typography variant="body2" color="text.secondary">info@Saylani.com</Typography>
        </Container>
        </Stack>
        
        
      </Box>
    
  );
}