import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';



export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ alignItems: 'center', }}>
      <BottomNavigation
        showLabels
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{background: '#4A9666'}}
      >
        <BottomNavigationAction sx={{color: 'white'}} label="GitHub" icon={<GitHubIcon />} href="https://github.com/rdahltorp" target="_blank" rel="noreferrer" />
        <BottomNavigationAction sx={{color: 'white'}} label="LinkedIn" icon={<LinkedInIcon />} href="https://www.linkedin.com/in/reeddahltorp/" target="_blank" rel="noreferrer" />
        <BottomNavigationAction sx={{color: 'white'}} label="Twitter" icon={<TwitterIcon />} href="https://twitter.com/rdahltorp" target="_blank" rel="noreferrer" />
      </BottomNavigation>
    </Box>
  );
}



// import React from "react";

// export default function Footer() {
//     return (
//         <div>
//             <ul>
//                 <li><a href="https://github.com/rdahltorp" target="_blank" rel="noreferrer">GitHub</a></li>
//                 <li><a href="https://www.linkedin.com/in/reeddahltorp/" target="_blank" rel="noreferrer">LinkedIn</a></li>
//                 <li><a href="https://stackoverflow.com/users/21008616/reed-dahltorp" target="_blank" rel="noreferrer">StackOverflow</a></li>
//             </ul>
//         </div>
//     )
// }