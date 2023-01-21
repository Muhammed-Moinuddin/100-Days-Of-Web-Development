import {Typography} from '@mui/material';

export const MuiTypography = () => {
    return(
        <div>
            <Typography variant='h1'>H1 Heading</Typography>
            <Typography variant='h2'>H2 Heading</Typography>
            <Typography variant='h3'>H3 Heading</Typography>
            <Typography variant='h4' component='h1' gutterBottom>H4 Heading</Typography>
            <Typography variant='h5'>H5 Heading</Typography>
            <Typography variant='h6'>H6 Heading</Typography>
            <Typography variant='subtitle1'>H6 Heading</Typography>
            <Typography variant='subtitle2'>H6 Heading</Typography>

            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus numquam aspernatur, cupiditate, ipsa quae minus, veritatis praesentium mollitia optio nemo ullam commodi! Vitae nobis doloremque similique eius! Non, at.</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga nisi praesentium quasi consequuntur asperiores quo animi blanditiis consectetur magni? Aliquid, earum adipisci quasi culpa eum delectus eius eligendi repellendus?</Typography>
        </div>
    )
}