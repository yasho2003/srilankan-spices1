import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

// Customer pages
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

// Admin pages
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";

// Footer pages
import WomenWithSpices from "./pages/WomenWithSpices";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import SpiceJournal from "./pages/SpiceJournal";
import Careers from "./pages/Careers";
import Events from "./pages/Events";
import JobVacancy from "./pages/JobVacancy";

import SellerPartnership from "./pages/SellerPartnership";
import WholesaleBulk from "./pages/WholesaleBulk";
import BusinessGifting from "./pages/BusinessGifting";
import EssentialFavors from "./pages/EssentialFavors";
import LocationsAndHours from "./pages/LocationsAndHours";
import RefundPolicy from "./pages/RefundPolicy";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <BrowserRouter>
      {/* Add the main flex container */}
      <div className="app-container">

        <Header />

        {/* Wrap Routes in a content div that expands */}
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/admin/edit-product/:id" element={<EditProduct />} />

            {/* Footer Pages */}
            <Route path="/women-with-spices" element={<WomenWithSpices />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/spice-journal" element={<SpiceJournal />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/events" element={<Events />} />
            <Route path="/careers/sales-promoter" element={<JobVacancy />} />
            <Route path="/careers/partner" element={<SellerPartnership />} />
            <Route path="/wholesale" element={<WholesaleBulk />} />
            <Route path="/gifts" element={<BusinessGifting />} />
            <Route path="/favors" element={<EssentialFavors />} />
            <Route path="/locations" element={<LocationsAndHours />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
