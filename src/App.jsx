import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "@/components/pages/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <LandingPage />
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