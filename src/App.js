import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./pages/shared/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import Purchase from "./pages/purshase/Purchase";
import RequireAuth from "./pages/login/RequireAuth";
import Blogs from "./pages/blogs/Blogs";
import NotFound from "./pages/shared/NotFound";
import Footer from "./pages/shared/Footer";
import Portfolio from "./pages/portfolio/Portfolio";
import Accessories from "./pages/accessories/Accessories";
import Reviews from "./pages/home/Reviews";
import DashBoard from "./pages/dashBoard/DashBoard";
import MyOrders from "./pages/dashBoard/MyOrders";
import AddReview from "./pages/dashBoard/AddReview";
import MyProfile from "./pages/dashBoard/MyProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Testimonials from "./pages/home/Testimonials";
import Support from "./pages/home/Support";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="accessories" element={<Accessories />}></Route>
        <Route path="testimonials" element={<Testimonials />}></Route>
        <Route
          path="purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
