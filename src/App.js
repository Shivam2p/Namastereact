import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js"
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import ResturantMenu from "./components/ResturantMenu.js";
import {  createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";



const Grocery=lazy(()=>import("./components/Grocery.js"))



const AppLayout=()=>{
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
}
  
const AppRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
       element:<Body/>
     },
      {
        path:"/about",
       element:<About/>
     },
     {
       path:"/contact",
      element:<Contact/>
    },
    {
      path:"/resturant/:resid",
     element:<ResturantMenu/>
   }
   ,
    {
      path:"/grocery",
     element:<Suspense fallback={<h1>loading....</h1>}><Grocery/></Suspense>
   }
    ],
    errorElement:<Error/>

  },
 
])
  const root = ReactDOM.createRoot(document.getElementById('root')); // It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. This root is the place where all React code will run.
  
  // root.render(heading);
  root.render(<RouterProvider router={AppRouter}/>);
  
  // In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.

 