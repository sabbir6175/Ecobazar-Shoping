import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import BlogPage from "../pages/Blog page/BlogPage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import SignIn from "../pages/Login/SignIn";
import Register from "../pages/Login/Register";
import Wishlist from "../pages/WishList.jsx/WishList";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import Checkout from "../pages/CheckOut/CheckOut";
import SingleBlog from "../pages/Blog page/SingleBlog";
import ProductDetails from "../pages/Shop Page/ProductDetails";
import ShopPage from "../pages/Shop Page/ShopPage";
import Dashboard from "../Layout/Dashboard";
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";
import OrderHistory from "../pages/Dashboard/UserDashboard/OderHistory";
import OrderDetails from "../pages/Dashboard/UserDashboard/OrderDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <ShopPage></ShopPage>,
      },
      {
        path: "/productDetails",
        element: <ProductDetails />,
      },
      {
        path: "/Blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/singleBlog",
        element: <SingleBlog></SingleBlog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/shoppingCart",
        element: <ShoppingCart></ShoppingCart>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      // Dashboard route
      {
        path: "/",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/Dashboard",
            element: <UserDashboard></UserDashboard>,
          },
          {
            path: "/order-history",
            element: <OrderHistory></OrderHistory>
          },
          {
            path: "/order-details",
            element: <OrderDetails></OrderDetails>
          },
        ],
      },
    ],
  },
]);
export default router;
