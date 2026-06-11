import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Auctions from "./pages/Auctions/Auctions";
import AuctionProjectDetails from "./pages/AuctionProjectDetails/AuctionProjectDetails";
import Buy from "./pages/Buy/Buy";
import BuyProjectDetails from "./pages/BuyProjectDetails/BuyProjectDetails";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import Rent from "./pages/Rent/Rent";
import RentProjectDetails from "./pages/RentProjectDetails/RentProjectDetails";
import Services from "./pages/Services/Services";

function App() {
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
