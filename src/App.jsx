import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import DashboardLayout from "./components/DashboardLayout.jsx";
import Memberships from "./pages/Memberships.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import Refunds from "./pages/Refunds.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/dashboard/Home.jsx";
import Members from "./pages/dashboard/Members.jsx";
import Payments from "./pages/dashboard/Payments.jsx";
import Orders from "./pages/dashboard/Orders.jsx";
import Content from "./pages/dashboard/Content.jsx";
import Galleries from "./pages/dashboard/Galleries.jsx";
import Models from "./pages/dashboard/Models.jsx";
import Analytics from "./pages/dashboard/Analytics.jsx";
import Settings from "./pages/dashboard/Settings.jsx";
import Billing from "./pages/dashboard/Billing.jsx";
import Team from "./pages/dashboard/Team.jsx";
import Support from "./pages/dashboard/Support.jsx";

const router = createBrowserRouter([
  // Public site (landing) under RootLayout
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Memberships /> },
      { path: "terms", element: <Terms /> },
      { path: "privacy", element: <Privacy /> },
      { path: "refunds", element: <Refunds /> },
      { path: "login", element: <Login /> },
    ],
  },
  // Admin dashboard under dark DashboardLayout
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "members", element: <Members /> },
      { path: "payments", element: <Payments /> },
      { path: "orders", element: <Orders /> },
      { path: "content", element: <Content /> },
      { path: "galleries", element: <Galleries /> },
      { path: "models", element: <Models /> },
      { path: "analytics", element: <Analytics /> },
      { path: "settings", element: <Settings /> },
      { path: "billing", element: <Billing /> },
      { path: "team", element: <Team /> },
      { path: "support", element: <Support /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
