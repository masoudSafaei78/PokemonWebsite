import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import theme from './Components/Theme/index'
import Login from './Components/Pages/Login'
import SignUp from './Components/Pages/SignUp'
ReactDOM.render(
  <ThemeProvider theme={theme}>

  <React.StrictMode>
    {/* <App /> */}
  {/* <Login /> */}
  <SignUp />
  </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
