import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button, Paper } from "@mui/material";


const sxStyles = {
    height: '600px',
    overflowY:"hidden",
}

function SaylaniCarousel()
{
    return (
        <Carousel animation="slide" duration={500} navButtonsAlwaysVisible={true} indicators={false} sx={{
            width:"100wh",
        }}>
            <Paper sx={sxStyles}>
            <img src='https://res.cloudinary.com/saylani-welfare/image/upload/v1672662640/website-images/dynamic/f0eb94d3-2d65-44ca-8b6c-8d26fe32181a.jpg' style={{
                height:"100%",
                width:"100%",
                objectFit:"contain"
            }}/>
        </Paper>
            <Paper sx={sxStyles}>
            <img src='https://res.cloudinary.com/saylani-welfare/image/upload/v1673677970/website-images/dynamic/4e38db41-b66a-4c9f-a7d6-618de0413d86.jpg' style={{
                height:"100%",
                width:"100%",
                objectFit:"contain"
            }}/>
        </Paper >
            <Paper sx={sxStyles}>
            <img src='https://res.cloudinary.com/saylani-welfare/image/upload/v1670909365/website-images/dynamic/fb746378-e3b6-4b95-ad67-662b193743e7.jpg' style={{
                height:"100%",
                width:"100%",
                objectFit:"contain"
            }}/>
        </Paper>
        
        </Carousel>
    )
}

export default SaylaniCarousel;