
import {
  createBrowserRouter,
} from "react-router-dom";
import Schedules from './pages/schedules';
import PageNotFound from './pages/page-not-found';

const router = createBrowserRouter([
    {
      path: "/schedules",
      element: <Schedules/>,
    },
    {
      path: "/",
      element: <Schedules/>,
    },
    {
      path: "*",
      element: <PageNotFound/>,
    },
  ]);

  export default router;
  