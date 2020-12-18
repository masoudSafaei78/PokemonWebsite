
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from '@material-ui/icons/Home';
import TableChartIcon from '@material-ui/icons/TableChart';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import GitHubIcon from '@material-ui/icons/GitHub';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AccountCircle from '@material-ui/icons/AccountCircle';


import Pokemonlogo from '../img/Pokemonlogo.png';

import { ButtonBase, fade, Paper } from '@material-ui/core';
import Home from './Pages/Home';
import Pokemon from '../img/Pokemon.png';
import Pokemon1 from '../img/Pokemon1.png';
import RouterComponent from './RouterComponent';
import '../Styles/LinkStyles.css';
const drawerWidth = 140;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
    // height:"10vh",
    color:theme.palette.primary.main,
    
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width:`calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      height:"70px"
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    display:'flex',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(16),
      width: '220px',
      height:'30px'
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    fontSize:'15px'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    // width: drawerWidth,
    backgroundColor:theme.palette.primary.main,
    
    
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    // background:"#ff0",
    width:"100%",
    paddingRight:"0px",
    fontSize:"20px"
  },
//   toolbarlogo:{
//     height:"70px",
//     width:"100%",
//     backgroundColor:theme.palette.primary.main
//   },
  logo:{
    // backgroundImage:`url(${Pokemonlogo})`,
    backgroundImage:`url(${Pokemon1})`,
    // backgroundPosition:"center",
    // marginBottom:"110px",
    backgroundOrigin:"content-box",
    backgroundSize:"contain",
    backgroundColor:theme.palette.primary.main,
    backgroundRepeat:"no-repeat",
    height:"70px",
    width:240,
    boxShadow:"none",
  },
  sectionDesktop: {
    display: 'none',
    color:theme.palette.secondary.main,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      
    },
  },
}));

function Layout(props) {
  
  const GoProfile = () => {
    props.history.push('/Profile')
}
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [darkmode,setDarkMode]=useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} >
          {/* <div className={classes.toolbarlogo}> */}
          <Paper className={classes.logo}/>

          {/* </div> */}
      </div>
      <Divider style={{color:theme.palette.secondary.main}}/>
      <List>
      
        <a  href="/" class="a"> 

          <ListItem button >
            <ListItemIcon><HomeIcon fontSize="large" style={{color:theme.palette.secondary.main}}/> </ListItemIcon>
            <ListItemText primary="Home" style={{color:theme.palette.secondary.main}}/>
          </ListItem>
        </a>
        <a  href="/TableAppearance" class="a">

          <ListItem button >
            <ListItemIcon><TableChartIcon fontSize="large" style={{color:theme.palette.secondary.main}}/></ListItemIcon>
            <ListItemText primary="Table Appearance" style={{color:theme.palette.secondary.main}}/>
          </ListItem>
        </a>
        
      </List>
      <Divider />
      <List>


            <a href="/Profile" class="a">
          <ListItem button >

            <ListItemIcon><PersonIcon fontSize="large" style={{color:theme.palette.secondary.main}}/></ListItemIcon >
            <ListItemText  primary="Profile"  style={{color:theme.palette.secondary.main}}/>
          </ListItem>
            </a>
<a  href="/Profile" class="a"> 

          <ListItem button >
            <ListItemIcon> <FavoriteIcon fontSize="large" style={{color:theme.palette.secondary.main}}/></ListItemIcon >
            <ListItemText primary="Favorites"  style={{color:theme.palette.secondary.main}}/>
          </ListItem>
</a>
     
      </List>
      <Divider />
      <List>
        {['About Pokemon', 'Contact Us'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InfoIcon fontSize="large" style={{color:theme.palette.secondary.main}}/> : <MailIcon fontSize="large" style={{color:theme.palette.secondary.main}}/>}</ListItemIcon >
            <ListItemText primary={text}  style={{color:theme.palette.secondary.main}}/>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography className={classes.title} variant="h6" >
            Pokemon
          </Typography> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon fontSize="large" />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

          <IconButton 
            className={classes.Icons}
            
            color="inherit">
              <a href="https://github.com/masoudSafaei78/PokemonWebsite" class="a" >

             
               <GitHubIcon fontSize="large" style={{color:theme.palette.secondary.main}}/>
              </a>
              
            </IconButton>
            <IconButton 
             className={classes.Icons}

            onClick={()=>setDarkMode(!darkmode)}
             
             color="inherit">
             
               {darkmode?<Brightness2Icon fontSize="large"/>:<WbSunnyIcon fontSize="large"/>}
              
            </IconButton>
            <IconButton
             className={classes.Icons}
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle fontSize="large"/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
        <Toolbar/>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
     

      <RouterComponent/>
       {/* <Home /> */}
        {/* <div className={classes.toolbar} /> */}
        

      
      </main>
    </div>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
