import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";



// Chunking 
// Code Spliting
// Dynamic Bundling
// Lazy Loading
// On demand loading

const Grocery= lazy(()=> import("./components/Grocery"))

const About= lazy(()=> import("./components/About"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // add as many routes by making the object as same
      {
        path: "/",
        element:<Body/>,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
           </Suspense>
        )
       
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
             <Grocery/>
          </Suspense>
        )
       
      },

      {
        path: "restaurants/:resId",
        element:<RestaurantMenu/>

      }
    ],
    errorElement: <Error />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>);
