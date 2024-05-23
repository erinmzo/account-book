import { createBrowserRouter } from "react-router-dom";
import DetailAccountPage from "../components/DetailAccountPage";
import HomePage from "../components/HomePage";

export const HOME_PATH = "/";

export const DEATIL_PATH = (param) => {
  const detail = "/deatil";
  if (param) {
    return `${detail}/${param}`;
  }

  return "/detail/:detailId";
};

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
