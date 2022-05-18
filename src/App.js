import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Buy from './views/Buy';
import Sell from './views/Sell';
import Dashboard from './views/Dashboard';
import Stake from './views/Stake';
import Swap from './views/Swap';
import Receive from './views/Receive';
import Send from './views/Send';
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
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import PaymentsIcon from '@mui/icons-material/Payments';
import OutboxIcon from '@mui/icons-material/Outbox';


export const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
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
            Crypto Wallet
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
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to='/' style={{ color: 'gray', textDecoration: 'none'}}>
            <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountBalanceWalletIcon />
                  </ListItemIcon>
                <ListItemText style={{color: 'black'}} primary='Wallet' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/buy' style={{ color: 'gray', textDecoration: 'none'}}>
            <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText style={{color: 'black'}} primary='Buy' />
                </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/sell' style={{ color: 'gray', textDecoration: 'none'}}>
            <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                      <RemoveIcon />
                  </ListItemIcon>
                  <ListItemText style={{color: 'black'}} primary='Sell' />
                </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/stake' style={{ color: 'gray', textDecoration: 'none'}}>
            <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                      <TrendingUpIcon />
                  </ListItemIcon>
                  <ListItemText style={{color: 'black'}} primary='Stake' />
                </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/swap' style={{ color: 'gray', textDecoration: 'none'}}>
            <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                      <SwapVertIcon />
                  </ListItemIcon>
                  <ListItemText style={{color: 'black'}} primary='Swap' />
                </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/send' style={{ color: 'gray', textDecoration: 'none'}}>
            <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                      <OutboxIcon />
                  </ListItemIcon>
                  <ListItemText style={{color: 'black'}} primary='Send' />
                </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/receive' style={{ color: 'gray', textDecoration: 'none'}}>
            <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                      <PaymentsIcon />
                  </ListItemIcon>
                  <ListItemText style={{color: 'black'}} primary='Receive' />
                </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/buy' element={<Buy />}/>
          <Route path='/sell' element={<Sell />}/>
          <Route path='/stake' element={<Stake />}/>
          <Route path='/swap' element={<Swap />}/>
          <Route path='/send' element={<Send />}/>
          <Route path='/receive' element={<Receive />}/>
        </Routes>
      </Main>
    </Box>
  );
}