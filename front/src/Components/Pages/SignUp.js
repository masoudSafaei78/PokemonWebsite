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




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "100px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
//   let Data = new FormData();
// Data.append('email', 's@s.com');
// Data.append('password', 'John123');
// Data.append('user', 'sasasasasw');
// Data.append('passwordConf', 'John123');

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate action="http://localhost/login&register/Registration.php" method="post" >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email" 
            // class="form-control"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            name="user" 
            // class="form-control"
            
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            
            label="Password"
            type="password"
            name="password" 
            // class="form-control"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            
            label="Re-enter Password"
            name="passwordConf" 
            // class="form-control"
            type="password"
            id="passwordConf"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            // onClick={()=>{ fetch("http://localhost/login&register/Registration.php", {  
            //   method: "POST",
              
            //   body:Data
            // }).then(function(response) {
            //   console.log(response.status);
            //   return response.json();
            // }).then(function(data) {
            //   console.log(data);
            // } )}}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              
            </Grid>
            <Grid item>
            <Link href="/login" variant="body2">
                {"Have an account? Log In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
   
    </Container>
  );
}