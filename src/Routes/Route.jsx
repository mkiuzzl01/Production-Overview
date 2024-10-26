import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ProductionOverview from "../components/Production_Overview/Production_Overview";
import ProductsStatus from "../components/Products_Status.jsx/Products_Status";
import OrderList from "../components/OrderList/OrderList";
import ActivityLog from "../components/ActivityLog/ActivityLog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <ProductionOverview></ProductionOverview>,
      },
      {
        path: "",
        element: <ProductsStatus></ProductsStatus>,
      },
      {
        path:"",
        element:<OrderList></OrderList>,
      },
      {
        path:"",
        element:<ActivityLog></ActivityLog>
      }
    ],
  },
]);

export default router;
