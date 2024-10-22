import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import './Drawr.css'
import SideNavigationBar from '../Components/SideNavigationBar'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Drawr() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className='frame'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className='example-heading nav-frame'>
            Profile
            <div className='pics-d'>
              <div className='pics'><img className='/Images/profileNotificationBar.svg'/></div>
              <div className='pics'><img className='/Images/profileIcon.svg'/></div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader className='side-left'>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
               <SideNavigationBar/>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
                
            <div className='form'>
                     <div className='first-part-form'>
                       <div className='first-inner-part-form'>
                      <div className='first-inner-part-heading'><h2>Contact Info</h2></div>
                      <div className='first-inner-part-para'><p>Manage Your Information</p></div>
                      </div>
                     </div>
                     <div className='second-part-border-form'>
                      <div className='second-part-border-1st'>
                            <div className='second-part-1st-rightside'>
                              <div className='second-part-1st-rightside-pic'><img src='/Images/profileIcon-Form.svg'/></div>
                              <div className='second-part-1st-rightside-head'>
                                <div className='second-part-1st-rightside-heading'><h2>Andre Samosa</h2></div>
                                <div className='second-part-1st-rightside-para'><p>andresamosa@mail.com</p></div>
                              </div>
                            </div>
                           <Button variant="contained" className='btn'>Upload Up</Button>
                      </div>

                      <div className='third-part-border-form'>
                            <div className='third-part-border-inputs'>
                              <div className='third-part-input'>
                                <label htmlFor="">Full Name</label>
                                <div className='third-part-inner-input'><input type="text" placeholder='Andera' /></div>
                              </div>
                              <div className='third-part-input'>
                                <label htmlFor="">Email</label>
                                <div className='third-part-inner-input'><input type="text" placeholder='anderasomsa@gmail.com'/></div>
                              </div>
                            </div>

                            <div className='third-part-border-inputs'>
                              <div className='third-part-input'>
                                <label htmlFor="">Origin</label>
                                <div className='third-part-inner-input'><input type="text" placeholder='Indonasia' /></div>
                              </div>
                            </div>
          
                      </div>

                      <div className='fourth-part-border-form'>             
                       <div className='fourth-inner-part-form'>
                      <div className='fourth-inner-part-heading'><h2>Crypto Addresses</h2></div>
                      <div className='fourth-inner-part-para'><p>Manage your information</p></div>
                      </div>

                       <div className='fourth-part-left-form'>
                        <div className='fourth-part-left-inner-d'>
                         <div className='fourth-part-para'><p>Please connect your BEP20 wallet for receiving referral payments</p></div>
                         <Button variant="contained" className='btn2' >Link Wallet</Button>
                         </div>
                       </div>


                      </div>
                     </div>
            </div>
      </Main>
    </Box>
  );
}
