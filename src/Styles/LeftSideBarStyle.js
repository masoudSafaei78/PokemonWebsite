import  {makeStyles,fade}  from '@material-ui/core/styles';
const drawerWidth = 202;
const useStyles = makeStyles((theme) => ({
    root: {
    //  margin:0,
      display: 'flex',
      width:"100%",
      height:'100%'
     
    },
    // appBar: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
    drawer: {
        
     
      width: "100%",
      flexShrink: 0,
    },
    drawerPaper: {
        background:theme.palette.primary.main,
      width: drawerWidth,
      color:theme.palette.secondary.main,
      marginTop:"10vh"
    },
    // necessary for content to be below app bar
    // toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      
    },
  }));
    
  export default useStyles;