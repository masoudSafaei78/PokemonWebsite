import { Grid } from '@material-ui/core'
import React from 'react'
import Header from '../Components/Header'
import LeftSideBar from '../Components/LeftSideBar'
import Home from '../Components/Pages/Home'
import useStyles from '../Styles/LayoutStyles';

function Layout() {
    const classes = useStyles();
    return (
     <Grid container className={classes.root}   >
         {/* <Grid item className={classes.headerPart} md={12} sm={12}> */}
           
         {/* <Header/> */}
         {/* </Grid> */}
         {/* <Grid item container direction="row" md={12} sm={12} justify="space-between">  */}
         {/* <Grid  item container  md={2 } sm={3} className={classes.leftside}> */}
             <Grid item md={12}>
         <LeftSideBar  />

             </Grid>

         {/* </Grid> */}
         <Grid item className={classes.mainPart} md={10} sm={9}> 
         <Home />

         </Grid>
      
         </Grid>
    //   </Grid>
    )}

export default Layout
