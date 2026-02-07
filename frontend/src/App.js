import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import MenuPage from "@/pages/MenuPage";
import ContactPage from "@/pages/ContactPage";
import MobileActionButtons from "@/components/MobileActionButtons";

function App() {
  return (
    <div className="App min-h-screen bg-[#FDFBF7]">
      <div className="noise-overlay" />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileActionButtons />
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
