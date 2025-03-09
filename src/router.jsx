import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Layouts/Home";
import AddVisa from "./pages/AddVisa";
import AllVisa from "./pages/AllVisa";
import VisaDetails from "./pages/VisaDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MyAddedVisa from "./pages/MyAddedVisa";
import UpdateVisa from "./pages/UpdateVisa";

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
        path: `/visa_details/:id`,
        element: <VisaDetails></VisaDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-visa/${params.id}`),
      },
      {
        path: "/all_visa",
        element: <AllVisa></AllVisa>,
        loader: () => fetch("http://localhost:5000/all-visa"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: `/all-visa/user/:name`,
        element: <MyAddedVisa></MyAddedVisa>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-visa/user/${params.name}`),
      },
      {
        path: `/update_visa/:id`,
        element: <UpdateVisa></UpdateVisa>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-visa/${params.id}`),
      },
    ],
  },
]);

export default router;
