

import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import ProductPage from "../pages/Shop Page/ProductPage";
import BlogPage from "../pages/Blog page/BlogPage";
import About from "../pages/About/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/shop',
            element: <ProductPage></ProductPage>
        },
        {
          path:'/Blog',
          element: <BlogPage></BlogPage>
        },
        {
          path:'/about',
          element: <About></About>
        }
    ]
  },
]);
export default router;
