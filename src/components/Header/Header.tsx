import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ListItemButton, ListItemIcon } from '@mui/material';

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjust breakpoint as needed

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <div style={{width: 250, backgroundColor: '#222222', color: '#ffffff', padding: '50px 15px'}} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {['Home', 'Exprience', 'Projects', 'Contacts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
                <ListItemIcon style={{color: 'inherit'}}>
                    {index === 0 ? <HomeIcon /> : index === 1 ? <WorkIcon /> : index === 2 ? <AssignmentIcon /> : <ContactMailIcon />}
                </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App Header
          </Typography>
          {!isMobile && (
            <>
              <IconButton color="inherit">
                <HomeIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
              </Typography>
              <IconButton color="inherit">
                <WorkIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Experience
              </Typography>
              <IconButton color="inherit">
                <AssignmentIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Projects
              </Typography>
              <IconButton color="inherit">
                <ContactMailIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Contact
              </Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer style={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}} anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
