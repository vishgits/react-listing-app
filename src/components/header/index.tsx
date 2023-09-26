import React from 'react';
import './index.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import iconSvg from './icon.svg'
function Header() {
  return (
    <> 
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img alt="Blue Prism Logo" width="190" height="45" src={iconSvg} /> 
          <span className='app-name'>| Schedule</span>
          </Typography>
          <MenuIcon />
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default Header;

