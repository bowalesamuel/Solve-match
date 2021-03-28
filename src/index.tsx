import React from 'react';
import ReactDOM from 'react-dom';
import "assets/styles/index.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "@material-ui/core"
import MaterialTheme from "theme"


const Root = () => (
  <React.StrictMode>
    <ThemeProvider theme={MaterialTheme} >
      <App/>
    </ThemeProvider>
  </React.StrictMode>
)


ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
