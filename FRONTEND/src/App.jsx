import { useState } from "react";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";
import UserData from "./components/userData";

function App() {
  const [count, setCount] = useState(0);
  const routes = createBrowserRouter([
    {
      path: "/signup",
      element: <Signup></Signup>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/urls",
      element: <UserData />,
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
