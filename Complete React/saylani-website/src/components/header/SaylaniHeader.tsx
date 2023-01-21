import { ThemeProvider } from '@emotion/react'
import {Link} from 'react-router-dom'


import {AppBar, Toolbar, Button, Stack, IconButton, createTheme, colors} from '@mui/material'
import SaylaniHome from '../home/SaylaniHome'

const theme = createTheme({
    palette: {
        secondary: {
            main: colors.grey[600],
        }
    },
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
})

export const SaylaniHeader = () => {
    return (
       <ThemeProvider theme={theme}> 
       <div>
        
            <AppBar position='sticky' sx={{backgroundColor:'white', borderBottom:'grey', position:'sticky',  top: '0'}}>
                <Toolbar  sx={{justifyContent: 'space-between'}}>
                    <IconButton  size='small' edge='start'>
                        <img src="https://www.saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png" width='220px'/>
                    </IconButton>
                    <Stack direction='row' spacing={3}>
                        <Link to='/home/SaylaniHome.tsx'><Button color='secondary'>Home</Button></Link>
                        <Link to="/media/SaylaniMedia.tsx"><Button color='secondary'>Media</Button></Link>
                        <Link to="/about/SaylaniAbout.tsx"><Button color='secondary'>About</Button></Link>
                        <Link to="/about/SaylaniAbout.tsx"><Button color='secondary'>Contact</Button></Link> 
                       
                    </Stack>
                    <Button variant='contained' sx={{marginRight:'20px'}}>
                        Call Now    
                    </Button>   
                </Toolbar>
            </AppBar> 
       </div> 
      </ThemeProvider> 
    )
}