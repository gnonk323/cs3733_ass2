import {RouterProvider, createBrowserRouter, Link} from "react-router-dom";
import Gus from "./Gus.tsx";
import Nate from "./Nate.tsx";
import {Box, Button} from "@mui/material";
import "./App.css";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            errorElement: <div />,
            element: <div style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Box sx={{borderRadius: 2, border: '0px solid black', bgcolor: 'lightgray', boxShadow: 2}}>
                    <Link to={"/gus"}>
                        <Button variant={"contained"} size={"large"} style={{margin: '15px'}}>Gus</Button>
                    </Link>
                    <Link to={"/nate"}>
                        <Button variant={"contained"} size={"large"} style={{margin: '15px'}}>Nate</Button>
                    </Link>
                </Box>
            </div>,
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
