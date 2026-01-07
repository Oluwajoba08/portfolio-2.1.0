import React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import App from "./App.jsx"
import Home from "./components/Home.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
