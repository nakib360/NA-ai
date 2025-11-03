import Home from "@/Components/Home";
import App from "../App"
import Main from "../Layouts.jsx/Main"
import { createBrowserRouter } from "react-router"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
])

export default router;