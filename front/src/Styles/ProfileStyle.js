
import  {makeStyles,fade}  from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      marginTop: "20px",
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      // margin: theme.spacing(3, 0, 2),
      color:theme.palette.secondary.main,
      // color:theme.palette.secondary.main,
      width:"200px",
      fontSize:"20px",
      background: theme.palette.primary.main,
      marginTop: "50px"
    },
    Profile: {
      // margin: theme.spacing(3, 0, 2),
      color:theme.palette.primary.main,
      // color:theme.palette.secondary.main,
      width:"150px",
      fontSize:"30px",
    },
    Typography: {
      marginTop:"20px",
      color:theme.palette.primary.main,
      // color:theme.palette.secondary.main,
      width:"150px",
      fontSize:"26px"
    },
  }));
  
  export default useStyles;