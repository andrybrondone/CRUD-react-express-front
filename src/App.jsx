import clsx from "clsx";
import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import Location from "./pages/Location";
import Page404 from "./pages/Page404";
import { DarkModeContext } from "./ui/components/darkMode/DarkModeGlobal";
import { Navigation } from "./ui/components/navigation/Navigation";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'locations',
        element: <Location />
      },
      {
        path: 'histogramme',
        element: <div>histogramme</div>
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ]
  },
])

function App() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={clsx(isDarkMode && "dark")}>
      <div className="min-h-[100vh] dark:bg-gray dark-transition dark:text-white">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
