import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Layouts/Home";
import AddVisa from "./pages/AddVisa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add_visa",
        element: <AddVisa></AddVisa>,
      },
    ],
  },
]);

export default router;
