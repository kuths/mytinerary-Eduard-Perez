import Home from "./pages/Home";
import Cities from "./pages/Cities";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router= createBrowserRouter (
[{
  path: "/"
  element: <Home></Home>
},
{
  path: "/Cities"
  element: <Cities></Cities>
},
]
);

function App() {
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App
