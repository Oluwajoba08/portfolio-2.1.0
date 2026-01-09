import React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import App from "./App.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
import Blog from "./components/Blog.jsx"
import Contact from "./components/Contact.jsx"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "about",
        Component: About,
      },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "blog",
        Component: Blog,
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
