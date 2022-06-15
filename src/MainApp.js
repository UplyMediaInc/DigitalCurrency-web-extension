import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
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
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import PaymentsIcon from '@mui/icons-material/Payments';
import OutboxIcon from '@mui/icons-material/Outbox';


export const drawerWidth = 180;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const DrawerItem = (props) => {
  return(
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
              {props.icon}
            </ListItemIcon>
              <ListItemText style={{color: 'black'}} primary={props.label} />
          </ListItemButton>
    </ListItem>
  )
}
export default function MainApp() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{display:'flex'}}>
      <CssBaseline>
        <AppBar style={{backgroundColor: '#437FC7'}} position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              DigitalCurrency.Crypto Wallet
            </Typography>

          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <Link to='/' style={{ color: 'gray', textDecoration: 'none'}}>
              <DrawerItem icon={<AccountBalanceWalletIcon />} label='Wallet'/>
            </Link>
            <Link to='/buy' style={{ color: 'gray', textDecoration: 'none'}}>
              <DrawerItem icon={<AddIcon />} label='Buy'/>
            </Link>
            <Link to='/sell' style={{ color: 'gray', textDecoration: 'none'}}>
              <DrawerItem icon={<RemoveIcon />} label='Sell'/>
            </Link>
            <Link to='/stake' style={{ color: 'gray', textDecoration: 'none'}}>
              <DrawerItem icon={<TrendingUpIcon />} label='Stake'/>
            </Link>
            <Link to='/swap' style={{ color: 'gray', textDecoration: 'none'}}>
              <DrawerItem icon={<SwapVertIcon />} label='Swap'/>
            </Link>
            <Link to='/send' style={{ color: 'gray', textDecoration: 'none'}}>
              <DrawerItem icon={<OutboxIcon />} label='Send'/>
            </Link>
            <Link to='/receive' style={{ color: 'gray', textDecoration: 'none'}}>
              <DrawerItem icon={<PaymentsIcon />} label='Receive'/>
            </Link>
          </List>
        </Drawer>
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            height:'100%', 
            backgroundColor:(theme) => theme.palette.grey[100], 
          }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </CssBaseline>
    </Box>
  );
};
