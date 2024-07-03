import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import DataSheetPage from "./pages/DataSheetPage";
import AboutPage from "./pages/AboutPage";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import PrivateLabelPage from "./pages/PrivateLabelPage";
import TrainingPage from "./pages/TrainingPage";
import TechnicalAssistancePage from "./pages/TechnicalAssistancePage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import AdminHome from "./admin/AdminHome";
import ShowAnnouncements from "./pages/ShowAnnouncements";
import AnnouncementForm from "./admin/AnnouncementForm";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/products/:productId/datasheet/:fileNumber" element={<DataSheetPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privatelabel" element={<PrivateLabelPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/technicalassistance" element={<TechnicalAssistancePage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/announcements" element={<AnnouncementForm />} />
      </Routes>
    </div>
  );
}

export default App;
