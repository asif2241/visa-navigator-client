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
import MyVisaApplication from "./pages/MyVisaApplication";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./Components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <VisaDetails></VisaDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://visa-navigator-server-one.vercel.app/all-visa/${params.id}`
          ),
      },
      {
        path: "/all_visa",
        element: <AllVisa></AllVisa>,
        loader: () =>
          fetch("https://visa-navigator-server-one.vercel.app/all-visa"),
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
        element: (
          <PrivateRoute>
            <MyAddedVisa></MyAddedVisa>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://visa-navigator-server-one.vercel.app/all-visa/user/${params.name}`
          ),
      },
      {
        path: `/update_visa/:id`,
        element: <UpdateVisa></UpdateVisa>,
        loader: ({ params }) =>
          fetch(
            `https://visa-navigator-server-one.vercel.app/all-visa/${params.id}`
          ),
      },
      {
        path: "/my_visa_application",
        element: (
          <PrivateRoute>
            <MyVisaApplication></MyVisaApplication>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
