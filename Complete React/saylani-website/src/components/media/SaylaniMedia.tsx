import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Typography, Stack, Container} from '@mui/material';
import HeadingDivider from '../divider/HeadingDivider';

export default function SaylaniMedia() {
    let items = ['FOLLOW YOUTUBE CHANNEL', "","1"];
    return (
    
    <Container>
    <HeadingDivider data={items} />
    <Stack direction='row' sx={{padding: '50px'}}>
        <Box sx={{paddingRight: '40px'}}>
        <Card sx={{ maxWidth: 345}}>
                <CardMedia><iframe width="320" height="160" src="https://www.youtube.com/embed/hhKTFu5orU4" title="پاکستانی نژاد امریکی شہریوں سے خصوصی درخواست"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Maulana Bashir Farooq Qadri Message
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Saylani Welfare International Trust was built on the fundamentals of breaking the cycle of poverty, alleviating the financial troubles of the poor
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'center'}}>
                    <Button size="small">Visit Now</Button>
                </CardActions>
            </Card>
        </Box>
        <Box sx={{paddingRight: '40px'}}>
        <Card sx={{ maxWidth: 345}}>
                <CardMedia><iframe width="320" height="160" src="https://www.youtube.com/embed/hhKTFu5orU4" title="پاکستانی نژاد امریکی شہریوں سے خصوصی درخواست"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Maulana Bashir Farooq Qadri Message
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Saylani Welfare International Trust was built on the fundamentals of breaking the cycle of poverty, alleviating the financial troubles of the poor
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'center'}}>
                    <Button size="small">Visit Now</Button>
                </CardActions>
            </Card>
        </Box>
        <Box sx={{paddingRight: '10px'}}>
        <Card sx={{ maxWidth: 345}}>
                <CardMedia><iframe width="320" height="160" src="https://www.youtube.com/embed/hhKTFu5orU4" title="پاکستانی نژاد امریکی شہریوں سے خصوصی درخواست"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Maulana Bashir Farooq Qadri Message
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Saylani Welfare International Trust was built on the fundamentals of breaking the cycle of poverty, alleviating the financial troubles of the poor
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'center'}}>
                    <Button size="small">Visit Now</Button>
                </CardActions>
            </Card>
        </Box>
    </Stack>
    <Stack direction='row' sx={{padding: '50px'}}>
        <Box sx={{paddingRight: '40px'}}>
            <Card sx={{ maxWidth: 345}}>
                <CardMedia><iframe width="320" height="160" src="https://www.youtube.com/embed/hhKTFu5orU4" title="پاکستانی نژاد امریکی شہریوں سے خصوصی درخواست"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Maulana Bashir Farooq Qadri Message
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Saylani Welfare International Trust was built on the fundamentals of breaking the cycle of poverty, alleviating the financial troubles of the poor
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'center'}}>
                    <Button size="small">Visit Now</Button>
                </CardActions>
            </Card>
        </Box>
        <Box sx={{paddingRight: '40px'}}>
        <Card sx={{ maxWidth: 345}}>
                <CardMedia><iframe width="320" height="160" src="https://www.youtube.com/embed/hhKTFu5orU4" title="پاکستانی نژاد امریکی شہریوں سے خصوصی درخواست"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Maulana Bashir Farooq Qadri Message
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Saylani Welfare International Trust was built on the fundamentals of breaking the cycle of poverty, alleviating the financial troubles of the poor
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'center'}}>
                    <Button size="small">Visit Now</Button>
                </CardActions>
            </Card>
        </Box>
        <Box sx={{paddingRight: '10px'}}>
        <Card sx={{ maxWidth: 345}}>
                <CardMedia><iframe width="320" height="160" src="https://www.youtube.com/embed/hhKTFu5orU4" title="پاکستانی نژاد امریکی شہریوں سے خصوصی درخواست"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Maulana Bashir Farooq Qadri Message
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Saylani Welfare International Trust was built on the fundamentals of breaking the cycle of poverty, alleviating the financial troubles of the poor
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'center'}}>
                    <Button size="small">Visit Now</Button>
                </CardActions>
            </Card>
        </Box>
    </Stack>
    </Container>
  );
}