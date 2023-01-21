import React from 'react';


import SaylaniCarousel from '../carousel/SaylaniCarousel';
import HeadingDivider from '../divider/HeadingDivider';
import SaylaniCourses from '../courses/SaylaniCourses';
import Motive from '../motive/Motive';
import { SaylaniHeader } from '../header/SaylaniHeader';


function SaylaniHome() {
  let items = ['COURSES AVAILABLE', 'Saylani Mass IT Training program is an institute who delivers Latest IT education (FREE OF COST) to the youth of country to make Pakistan technically strong and to promote Entrepreneurship and startup culture in Pakistan.',"1"];
  let items2 = ['OUR MOTIVE', "","1"];

  return (
    <div>
      
      <SaylaniCarousel/>
      <HeadingDivider data={items}/>
      <SaylaniCourses/>
      <HeadingDivider data={items2}/>
      <Motive/>
      
    </div>
  );
}

export default SaylaniHome;