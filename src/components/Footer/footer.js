import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';



export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className='footer'>
      <h3 className='footerTitle'>Get In Touch</h3>
      <Box sx={{ alignItems: 'center', }}>
        <BottomNavigation
          showLabels
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{background: '#4A9666'}}
        >
          <BottomNavigationAction sx={{color: 'white'}} label="Email" icon={<EmailIcon />} href="mailto:rdahltorp+contact@gmail.com" target="_blank" rel="noreferrer" />
          <BottomNavigationAction sx={{color: 'white'}} label="GitHub" icon={<GitHubIcon />} href="https://github.com/rdahltorp" target="_blank" rel="noreferrer" />
          <BottomNavigationAction sx={{color: 'white'}} label="LinkedIn" icon={<LinkedInIcon />} href="https://www.linkedin.com/in/reeddahltorp/" target="_blank" rel="noreferrer" />
        </BottomNavigation>
      </Box>
    </div>
  );
}


//New footer design
// export default function SimpleBottomNavigation() {
//   const [value, setValue] = React.useState(0);

//   return (
//     <footer className='footer'>
//       <div className='footer_container'>
//         <div className='footer_top'>
//           <div>
//             <h6 className='footer_title'>Contact</h6>

//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }