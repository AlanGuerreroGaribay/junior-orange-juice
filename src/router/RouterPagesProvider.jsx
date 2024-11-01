import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../pages/home/App";
import PrivacyAnnoucement from "../pages/privacy/PrivacyAnnoucement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacy",
    element: <PrivacyAnnoucement />,
  },
]);

const RouterPagesProvider = () => {
  return <RouterProvider router={router} />;
};

export default RouterPagesProvider;
