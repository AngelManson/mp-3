import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./Components/Root";
import "./App.css"


function App() {

    const router = createBrowserRouter(
        [
            {path:"*", Component:Root}
        ]
    );

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
