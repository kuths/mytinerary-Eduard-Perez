import Home from "./pages/Home";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StandardLayout from "./layouts/StandardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StandardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cities",
        element: <Cities />,
      },
      {
        path: "cities/:id", 
        element: <CityDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;