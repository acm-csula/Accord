import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import index from "./compoents/index";
import login from "./compoents/login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={index} exact/>
        <Route path="/login" component={login}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
