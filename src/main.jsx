import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import MessMenu from "./components/MessMenu.jsx";
import Notifications from "./pages/Notifications.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/mess-menu" element={<MessMenu />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/user-profile" element={<UserProfilePage />} />
      <Route path="/admin/complaint-portal" element={<AdminComplaintPortal/>} />
      <Route path="/admin/dashboard" element={<AdminDashboard/>} />
      <Route path="/admin/attendance" element={<AdminPortal/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
