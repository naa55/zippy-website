import { createBrowserRouter } from "react-router-dom";
import Default from "./Layouts/Default";
import Dashboard from "./Page/Dashboard";
import GuestLayout from "./Layouts/GuestLayout";
import NotFound from "./Page/NotFound";
import Login from "./Page/Login";
import PackageTracking from "./Page/PackageTracking";
import MyTransaction from "./Page/MyTransaction";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Default />,
      children: [
        {
          path: 'dashboard', 
          element: <Dashboard />
        },
        {
          path: 'package-tracking', 
          element: <PackageTracking />
        },
        {
          path: 'my-transaction', 
          element: <MyTransaction />
        },
      ]
    },
    {
      path: '/',
      element: <GuestLayout />,
      children: [
        {
          path: 'login',
          element: <Login />
        },
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);
  

export default router;