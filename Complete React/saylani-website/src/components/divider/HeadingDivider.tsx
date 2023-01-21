import * as React from 'react';

import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';


const Root = styled('div')(({ theme }) => ({
    marginTop: '3%',
    textAlign: 'center',
    width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(3),
  },
}));

export default function HeadingDivider({data}: {data: string[]}) {
  
       const content = (
      <div>
      
        {data[1]}
      </div>
    );

  return (
    <Root>
      <Divider sx={{paddingBottom:'15px'}}>
        <Chip label={data[0]} sx={{backgroundColor:'#99CA3C'}}/>
      </Divider> 
      {content}
    </Root>
  );
}
