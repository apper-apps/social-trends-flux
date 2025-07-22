import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import LandingPage from "@/components/pages/LandingPage";
import PricingPage from "@/components/pages/PricingPage";
import Dashboard from "@/components/pages/Dashboard";
import AuthModal from "@/components/organisms/AuthModal";
function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);
return (
    <Router>
      <div className="App">
<Routes>
          <Route path="/" element={<LandingPage openAuthModal={openAuthModal} />} />
          <Route path="/pricing" element={<PricingPage openAuthModal={openAuthModal} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{ zIndex: 9999 }}
        />
      </div>
    </Router>
  );
}

export default App;