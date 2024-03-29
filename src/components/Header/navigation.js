import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';



function ResponsiveAppBar({ currentPage, handlePageChange, handleCloseNavMenu, handleOpenNavMenu, anchorElNav }) {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{
        background: '#4A9666'
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          {/* Handles desktop headline */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Reed Dahltorp
          </Typography>
            
            {/* Handles the mobile menu burger icon and menu options */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* Icon */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* Menu options in mobile */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={() => handlePageChange('AboutMe') && handleCloseNavMenu}>
                  <Typography textAlign="center">About Me</Typography>
                </MenuItem>
                <MenuItem onClick={() => handlePageChange('Portfolio') && handleCloseNavMenu}>
                  <Typography textAlign="center">Portfolio</Typography>
                </MenuItem>
                <MenuItem onClick={() => handlePageChange('Resume') && handleCloseNavMenu}>
                  <Typography textAlign="center">Resume</Typography>
                </MenuItem>
                {/* Removing menu till backend functionality can be installed. */}
                {/* <MenuItem onClick={() => handlePageChange('Contact') && handleCloseNavMenu}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem> */}
            </Menu>
          </Box>
          
          {/* Handles mobile headline */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Reed Dahltorp
          </Typography>
          
          {/* Handles the menu options in desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <MenuItem onClick={() => handlePageChange('AboutMe')}>
                  <Typography textAlign="center" className={currentPage === 'AboutMe' ? 'navHighlight' : ''}>About Me</Typography>
                </MenuItem>
                <MenuItem onClick={() => handlePageChange('Portfolio')}>
                  <Typography textAlign="center" className={currentPage === 'Portfolio' ? 'navHighlight' : ''}>Portfolio</Typography>
                </MenuItem>
                <MenuItem onClick={() => handlePageChange('Resume')}>
                  <Typography textAlign="center" className={currentPage === 'Resume' ? 'navHighlight' : ''}>Resume</Typography>
                </MenuItem>
                {/* Removing menu till backend functionality can be installed. */}
                {/* <MenuItem onClick={() => handlePageChange('Contact')}>
                  <Typography textAlign="center" className={currentPage === 'Contact' ? 'navHighlight' : ''}>Contact</Typography>
                </MenuItem> */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
