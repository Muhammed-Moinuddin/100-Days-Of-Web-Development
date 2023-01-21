import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

  

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#616161' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(3),
  margin: theme.spacing(5),
  textAlign: 'left',
  fontSize:'20px',
  justifyContent:'center',
  aligntems: 'center',
  
  color: theme.palette.text.secondary,
}));

export default function Motive() {
  return (
        <Box sx={{ flexGrow: 1, }}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
            
            <Item>
            <Typography variant='h2' color='#0066B3' sx={{textAlign: 'left', paddingBottom:'24px'}}>Our Dream for Pakistan</Typography>
                We are committed to developing more than 1 million software developers, which will add about 100 billion annually to Pakistan's economy and help ease the debt burden on Pakistan Saylani Welfare Trust is a name that needs no introduction today. The journey this team embarked upon was made possible owing to their zeal, enthusiasm & commitment to the society and by the grace of Allah (SWT), it has become a name that we need and not just the one we want. I wish Saylani’s team all the success and blessing that they deserve for future, May God bless Saylani and ensure prosperity and happiness for our people, Ameen!</Item>
            </Grid>
            <Grid sx={{objectFit: "contain"}}>
            <Item><img src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646497311/website-images/static/24.jpg" width='620px'/></Item>
            </Grid>
            
        </Grid>
        </Box>
  );
}