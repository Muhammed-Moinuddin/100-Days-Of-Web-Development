import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Stack, createTheme, colors, ThemeProvider} from '@mui/material'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

const theme = createTheme({
    palette: {
        primary: {
            main: colors.grey[500],
        }
    }
})
export default function MuiHeader(){
    // const [mobileOpen, setMobileOpen] = React.useState(false);
  
    // const handleDrawerToggle = () => {
    //   setMobileOpen((prevState) => !prevState);
    // }
    
    return(
        <ThemeProvider theme={theme}>
        <div>
            {/* <AppBar component="nav">
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 8, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    MUI
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#fff' }}>
                        {item}
                    </Button>
                    ))}
                </Box>
                </Toolbar>
            </AppBar> */}
            <AppBar position='sticky' sx={{backgroundColor:'white', borderBottom:'grey'}}>
                <Toolbar  sx={{justifyContent: 'space-between'}}>
                    <IconButton  size='small' edge='start'>
                        <img src="https://www.saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png" width='220px'/>
                    </IconButton>
                    <Stack direction='row' spacing={2} sx={{color: 'primary.main'}}>
                        <Button color='inherit' >Home</Button>
                        <Button>Media</Button>
                        <Button>About Us</Button>  
                    </Stack>
                    <Button variant='contained'>
                        Call Now    
                    </Button>   
                </Toolbar>
            </AppBar>
        </div>
        </ThemeProvider>
    )
}