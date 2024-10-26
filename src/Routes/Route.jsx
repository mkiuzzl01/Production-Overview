import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ProductionOverview from "../components/Production_Overview/Production_Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <ProductionOverview></ProductionOverview>,
      },
    ],
  },
]);

export default router;
