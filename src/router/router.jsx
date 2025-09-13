

import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import ProductPage from "../pages/Shop Page/ProductPage";
import BlogPage from "../pages/Blog page/BlogPage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";


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
        },
        {
          path:'/contact',
          element: <Contact></Contact>
        },
    ]
  },
]);
export default router;
