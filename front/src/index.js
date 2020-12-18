import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import theme from './Components/Theme/index'
import Login from './Components/Pages/Login'
import SignUp from './Components/Pages/SignUp'
import Profile from './Components/Pages/Profile'
import EditProfile from './Components/Pages/EditProfile'
import TableAppearance from './Components/Pages/TableAppearance'
import RouterComponent from './Components/RouterComponent';

ReactDOM.render(
  <ThemeProvider theme={theme}>

  <React.StrictMode>
   {/* <App /> */}
   <Login />
   {/* <RouterComponent/> */}
   {/* <SignUp /> */}
   {/* <Profile /> */}
   {/* <EditProfile /> */}
   {/* <TableAppearance /> */}
  </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
// reportWebVitals();
