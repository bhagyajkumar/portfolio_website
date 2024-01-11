import ThemeWrapper from "./Components/Wrapper/ThemeWrapper"
import Navbar from "./Components/Navbar"
import HomePage from "./Pages/HomePage"
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

let router = createBrowserRouter(
  [
    {
      path: "/",
      Component: HomePage,
      errorElement: <ThemeWrapper><p className="text-5xl px-7">404 Not Found</p></ThemeWrapper>
    }
  ]
)

function App() {

  return (
    <div>
      <Navbar />
      <RouterProvider router={router} fallbackElement={<h1>Loading....</h1>} />
    </div>
  )
}

export default App

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}