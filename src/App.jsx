import Home from "./pages/Home";
import Cities from "./pages/Cities";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StandardLayout from "./layouts/StandardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StandardLayout />,
    children: [
      {
        index: true, // ✅ Esto indica que "/" renderiza `Home`
        element: <Home />,
      },
      {
        path: "cities", // ✅ Se usa sin "/" porque es una ruta anidada
        element: <Cities />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

