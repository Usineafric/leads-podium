import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LeadGenWebsite from "./LeadGenWebsite";
import RealEstatePage from "./pages/RealEstatePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsPage from "./pages/TermsPage";
import CookiesPage from "./pages/CookiesPage";
import InsurancePage from "./pages/InsurancePage";
import ScrollToTop from "./components/ScrollToTop";
import SolarEnergyPage from "./pages/SolarEnergyPage";
import HomeServicesPage from "./pages/HomeServicesPage";
import FinancialPage from "./pages/FinancialPage";
import HealthcarePage from "./pages/HealthcarePage";
import LegalPage from "./pages/LegalPage";
import EducationPage from "./pages/EducationPage";



export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><LeadGenWebsite /></Layout>} />
        <Route path="/real-estate" element={<Layout><RealEstatePage /></Layout>} />
        <Route path="/insurance" element={<Layout><InsurancePage /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms" element={<Layout><TermsPage /></Layout>} />
        <Route path="/cookies" element={<Layout><CookiesPage /></Layout>} />
        <Route path="/solar-energy" element={<Layout><SolarEnergyPage /></Layout>} />
        <Route path="/home-services" element={<Layout><HomeServicesPage /></Layout>} />
        <Route path="/financial" element={<Layout><FinancialPage /></Layout>} />
        <Route path="/healthcare" element={<Layout><HealthcarePage /></Layout>} />
        <Route path="/legal" element={<Layout><LegalPage /></Layout>} />
        <Route path="/education" element={<Layout><EducationPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
