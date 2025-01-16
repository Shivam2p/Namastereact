import react from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import RestaurantCard from "./components/RestaurantCard.js";
import Body from "./components/Body.js";







const AppLayout=()=>{
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}
  
  const root = ReactDOM.createRoot(document.getElementById('root')); // It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. This root is the place where all React code will run.
  
  // root.render(heading);
  root.render(<AppLayout/>);
  
  // In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.

 