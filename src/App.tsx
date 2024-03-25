import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Gus from "./Gus.tsx";
import Nate from "./Nate.tsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            errorElement: <div />,
            element: <div />,
            children: [],
        },
        {
            path: "/gus",
            errorElement: <div />,
            element: <Gus />,
            children: [],
        },
        {
            path: "/nate",
            errorElement: <div />,
            element: <Nate />,
            children: [],
        },
    ]);
    return <RouterProvider router={router}></RouterProvider>

}

export default App
