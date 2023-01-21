import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Typography, Stack, Container} from '@mui/material';

export default function SaylaniCourses() {
  return (
    <Container>
    <Stack direction='row' sx={{padding: '50px'}}>
        <Box sx={{paddingRight: '40px'}}>
            <Card sx={{ maxWidth: 345}}>
                <CardMedia
                    sx={{ height: 160 }}
                    image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Web & Mobile App Course
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Web and Mobile Application Development course in which you'll learn the latest art of the technology stack from best teachers
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'center'}}>
                    <Button size="small">Apply Now</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
        <Box sx={{paddingRight: '40px'}}>
            <Card sx={{ maxWidth: 345}}>
                <CardMedia
                    sx={{ height: 160 }}
                    image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    CCNA
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    CCNP is a prerequisite of CCNA. So those who have already completed their CCNA certification can apply to entrance exam.
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'center'}}>
                    <Button size="small">Apply Now</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
        <Box sx={{paddingRight: '10px'}}>
            <Card sx={{ maxWidth: 345}}>
                <CardMedia
                    sx={{ height: 160 }}
                    image="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Graphic Designing Course
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    The Ultimate Graphic Design Course Which Covers Photoshop, Illustrator,Design Theory, Branding and Logo Design
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'center'}}>
                    <Button size="small">Apply Now</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    </Stack>
    </Container>
  );
}