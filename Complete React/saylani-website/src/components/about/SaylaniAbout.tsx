import { Container, Typography } from "@mui/material";

import aboutImg from '../images/about3.jpg'
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import HeadingDivider from "../divider/HeadingDivider";

let items2 = ['OUR MOTIVE', "","1"];
const SaylaniAbout = () => {
    return(
        <Container sx={{marginY:"7rem", backgroundColor:"#f5f5f5"}}>
            <HeadingDivider data={items2}/>
            <div>
                <div>
                    <h1>WHY YOU SHOULD START LEARING WITH US?</h1>
                    <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                <div>

                    <div >
                        <div >
                            <ClassIcon sx={{color:'#99CA3C', fontSize:40}}/>
                        </div>
                        <div>
                            <h2 className="about-props-heading">EXCELLENT ENVIRONMENT</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eos nemo officiis similique minus perspiciatis facere fugit laudantium assumenda deleniti!</p>
                        </div>
                    </div>
                    <div >
                        <div >
                            <CardMembershipIcon sx={{color:'#99CA3C', fontSize:40}}/>
                        </div>
                        <div>
                            <h2>INTERNATIONAL CERTIFICATE</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eos nemo officiis similique minus perspiciatis facere fugit laudantium assumenda deleniti!</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <SchoolIcon sx={{color:'#99CA3C', fontSize:40}}/>
                        </div>
                        <div>
                            <h2 >SKILLED TEACHERS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eos nemo officiis similique minus perspiciatis facere fugit laudantium assumenda deleniti!</p>
                        </div>
                    </div>
                    
                </div>

                </div>
                <div className='about2-img-container'>
                    <img src="https://www.impactplus.com/hubfs/blog-image-uploads/best-about-us-pages.jpg" alt="image" className='about-img'/>
                </div >
            </div>
        </Container>
    )
}

export default SaylaniAbout; 