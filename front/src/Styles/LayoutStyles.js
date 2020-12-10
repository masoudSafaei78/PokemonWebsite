import { green } from '@material-ui/core/colors';
import  {makeStyles,fade}  from '@material-ui/core/styles';
const useStyles = makeStyles( (theme) => ({
    root:{
        // backgroundColor:"red",
        display:"flex",
       flexGrow:1,
        // height:"100vh",
        width:"100%"
    },
    leftside:{
        flex:1,
            
        backgroundColor:theme.palette.primary.second,
        // height:"90vh"
        // marginTop:"70px"

    },
    mainPart:{
        flex:1,
        // height:"100vh",
        overflowY:"hidden",
        backgroundColor:theme.palette.primary.second

    },
    headerPart:{
       
        width:"100%",
        // height:"20%"
    },
    secondPart:{
        height:"80%"
    }
   
  }));
  export default useStyles;