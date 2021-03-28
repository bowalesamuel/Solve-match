import React from 'react';
import {Router} from "react-router-dom"
import history from "utils/history"
import MainRouter from "./MainRouter"


function App() {
  return (
    <Router history={history} >
      <MainRouter/>
    </Router>
  );
}

export default App;
