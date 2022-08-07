import React from "react";
import reactdom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App"

reactdom.render(
  <>
    <BrowserRouter>
    <App/>
</BrowserRouter>
  </>,
  document.getElementById('root')

)