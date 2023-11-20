import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from "./Registration";
import Interface from "./Pages/Interface";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration/> 
  },
  {
    path: "about",
    element: <Interface/>
  },
]);

createRoot(document.getElementById('root') as any).render(
  <RouterProvider router={router} />
);