import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountCircle from '@material-ui/icons/AccountCircle';
import useStyles from "../../Styles/ProfileStyle"





export default function Profile() {
  const Email= (localStorage.getItem('Email')) ;
  console.log(Email);
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.Profile}>
          Profile
        </Typography>
        <Grid container direction="row" justify="space-around" alignItems="center" style={{marginTop:"20px"}}> 
        <Grid item >
        <Typography className={classes.Typography}>
          Your Email : 
        </Typography>

        </Grid>
        <Grid item style={{left:"0px"}} >
        <Typography className={classes.Typography}>
          {Email}
        </Typography>

        </Grid>
            
        </Grid>
        <a href="/"> 

        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {()=> localStorage.removeItem('Email')}
            >
             Log Out
          </Button>
            </a>

       
        {/* <form className={classes.form} noValidate>
            
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
             Edit Profile
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
             Change Password
          </Button>
          <Grid container>
            <Grid item xs>
              
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </form> */}
      </div>
    
    </Container>
  );
}