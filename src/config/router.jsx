import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: '',
        element: ''

    }
])
const RouterComponent = () => {
    return <RouterProvider router={router} />
}
export default RouterComponent