import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useMoralis } from 'react-moralis';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import RemoveIcon from '@mui/icons-material/Remove';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import PaymentsIcon from '@mui/icons-material/Payments';
import OutboxIcon from '@mui/icons-material/Outbox';
import ArticleIcon from '@mui/icons-material/Article';
import logo from './DigitalCurrencyLogo.png';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export const drawerWidth = 180;

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
export default function MainApp(props) {
  const { user, logout } = useMoralis()
  const { window } = props;
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null)

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  }
  const handleClose = () => {
    setAnchor(null);
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
      <img src={logo} height={100} width={100}/>
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
            <Link to='/whitepaper' style={{ color: 'gray', textDecoration: 'none'}}>
              <DrawerItem icon={<ArticleIcon />} label='Whitepaper'/>
            </Link>
          </List>
    </Box>
  )
  const container = window !== undefined ? () => window().document.body : undefined;
user && console.log(user)
  return (
    <Box sx={{display:'flex'}}>
      <CssBaseline>
        <AppBar style={{backgroundColor: '#437FC7'}} component='nav'>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{flexGrow: 1}}>
              <Typography variant="h6" noWrap component="div">
                DigitalCurrency
              </Typography>
            </Box>
            {user && <div>
              <Tooltip title='Open settings'>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
              </Tooltip>
              <Menu
                  id="menu-appbar"
                  anchorEl={anchor}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchor)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Account Settings</MenuItem>
                  <MenuItem onClick={logout}>Log Out</MenuItem>
                </Menu>
              </div>}
          </Toolbar>
        </AppBar>
        <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            height:'100%', 
            backgroundColor:(theme) => theme.palette.grey[100], 
          }}>
            <Toolbar/>
              <Outlet />
        </Box>
      </CssBaseline>
    </Box>
  );
};
