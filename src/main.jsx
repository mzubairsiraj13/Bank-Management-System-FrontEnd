import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./Pages/Home";
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/Login";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";

import {store, persistor} from "./features/store.js";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import VerifyEmail from "./Pages/VerifyEmail.jsx";

import ResetPasword from "./Pages/ResetPassword.jsx";
import PasswordResetOTP from "./Pages/PasswordResetOTP.jsx";
import DashboardLayout from "./Pages/DashboardPages/DashboardLayout.jsx";
import DashboardHome from "./components/DashboardComponents/DashboardHome.jsx";
import NotFound from "./components/NotFound.jsx";
import Analytics from "./Pages/DashboardPages/Analytics.jsx";
import ProfileSettings from "./Pages/DashboardPages/ProfileSettings.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/register",
        element: (
          <ProtectedRoutes authentication={false}>
            <RegisterPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedRoutes authentication={false}>
            <LoginPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/verify_email",
        element: (
          <ProtectedRoutes authentication={false}>
            <VerifyEmail />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/reset_password",
        element: (
          <ProtectedRoutes authentication={false}>
            <ResetPasword />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/password_reset_otp",
        element: (
          <ProtectedRoutes authentication={false}>
            <PasswordResetOTP />
          </ProtectedRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element:  (
      <ProtectedRoutes authentication={false}>
        <DashboardLayout />
      </ProtectedRoutes>
    ),
    children : [
      {
        path: "/dashboard",
        element: <DashboardHome/>
      },
      {
        path: "/dashboard/analytics",
        element: <Analytics/>
      },
      {
        path: "/dashboard/settings",
        element: <ProfileSettings/>
      },

    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider
        router={router}>
      </RouterProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
