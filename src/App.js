import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import home from "./compoents/home";
import login from "./compoents/login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={home} exact/>
        <Route path="/login" component={login}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
