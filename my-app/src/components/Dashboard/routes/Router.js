import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Error from "../components/Error.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Package = lazy(() => import("../views/ui/PackageTable.js"));
const User = lazy(() => import("../views/ui/UserTable.js"));
const Service = lazy(() => import("../views/ui/ServiceTable.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/packagetable", exact: true, element: <Package /> },
      { path: "/usertable", exact: true, element: <User /> },
      { path: "/servicetable", exact: true, element: <Service /> },

      { path: "*", exact: true, element: <Error /> },
    ],
  },
];

export default ThemeRoutes;
