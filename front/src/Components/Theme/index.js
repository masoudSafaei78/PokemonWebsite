
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      // main:"#264357",
      main:"#17021A",
      second:"#31546C"
      //#000
    },
    secondary: {
      // main: "#2EB5FB",
      main: "#DADEC5",
       
    //   #DAF7A6
    },
  },
  typography:{
    body1:{
      fontSize:"15px",
      // color:theme.palette.secondary.main
    }
  },
  

});
export default theme;