import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Production_Overview from "../components/Pages/Production_Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Production_Overview></Production_Overview>,
      },
    ],
  },
]);

export default router;
