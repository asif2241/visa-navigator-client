import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Layouts/Home";
import AddVisa from "./pages/AddVisa";
import AllVisa from "./pages/AllVisa";

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
      {
        path: "/all_visa",
        element: <AllVisa></AllVisa>,
        loader: () => fetch("http://localhost:5000/all-visa"),
      },
    ],
  },
]);

export default router;
