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
          <BottomNavigationAction sx={{color: 'white'}} label="Twitter" icon={<TwitterIcon />} href="https://twitter.com/rdahltorp" target="_blank" rel="noreferrer" />
        </BottomNavigation>
      </Box>
    </div>
  );
}
