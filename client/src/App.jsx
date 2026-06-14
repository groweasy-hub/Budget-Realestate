import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/user/Footer/Footer";
import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin/AdminLogin";
import Auctions from "./pages/user/Auctions/Auctions";
import AuctionProjectDetails from "./pages/user/AuctionProjectDetails/AuctionProjectDetails";
import Buy from "./pages/user/Buy/Buy";
import BuyProjectDetails from "./pages/user/BuyProjectDetails/BuyProjectDetails";
import Contact from "./pages/user/Contact/Contact";
import Home from "./pages/user/Home/Home";
import PropertyDetails from "./pages/user/PropertyDetails/PropertyDetails";
import Rent from "./pages/user/Rent/Rent";
import RentProjectDetails from "./pages/user/RentProjectDetails/RentProjectDetails";
import Services from "./pages/user/Services/Services";
import { isAdminAuthenticated } from "./utils/adminAuth";

function AdminProtectedRoute({ children }) {
  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
      }}
    >
      <main style={{ flex: "1 0 auto" }}>
        <Routes>
          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={(
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            )}
          />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/buy-project/:projectId" element={<BuyProjectDetails />} />
          <Route path="/auction-project/:projectId" element={<AuctionProjectDetails />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/rent-project/:projectId" element={<RentProjectDetails />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/property/:propertyId" element={<PropertyDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isAdminRoute ? <Footer /> : null}
    </div>
  );
}

export default App;

