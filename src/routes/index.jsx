import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import PageSendPix from "../pages/PageSendPix.jsx";
import PayPix from "../pages/PayPix.jsx";
import PayPixOption from "../pages/PayPixOption.jsx";
import Register from "../pages/Register.jsx";
import ProfileUser from "../pages/ProfileUser.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/pagesendpix",
        element: <PageSendPix />,
      },
      {
        path: "/paypix",
        element: <PayPix />,
      },
      {
        path: "/paypixoption",
        element: <PayPixOption />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profileUser",
        element: <ProfileUser />,
      },
    ],
  },
]);
