import * as React from 'react';
import { Stack, Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Mybutton(){
    return(
        <Stack spacing={2} direction='row'>
            <Button variant="outlined">Click for Youtube</Button>
            <Button variant="contained">Hello From Moin</Button>
            <Button variant="text"  href='https://m.youtube.com/'>Hello From Moin</Button>

            <div>
            <Stack>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Primary</Button>
            <Button variant='contained' color='error'>Primary</Button>
            <Button variant='contained' color='warning'>Primary</Button>
            <Button variant='contained' color='info'>Primary</Button>
            <Button variant='contained' color='success'>Primary</Button>
            </Stack>
            </div>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='large' disableElevation >Large</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='medium' endIcon={<SendIcon/>} disableRipple onClick={() => alert('Clicked')}>Send</Button>
                <Button variant='contained' size='medium' startIcon={<SendIcon/>}>Send</Button>
                <IconButton aria-label='send' color='primary' size='large'>
                    <SendIcon/>
                </IconButton>
            </Stack>
        </Stack>
        
    )
}