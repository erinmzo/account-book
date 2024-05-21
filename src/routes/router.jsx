import { createBrowserRouter } from "react-router-dom";
import DetailAccountPage from "../components/DetailAccountPage";
import HomePage from "../components/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail/:detailId",
    element: <DetailAccountPage />,
  },
]);

export default router;
