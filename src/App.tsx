import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LandingPage, LoginPage, SignupPage, EarningsPage, ExtensionPage } from './pages';
import { SupportWidget } from './components/support';
import { ViewportProvider } from './hooks/useViewportContext';

function App() {
  return (
    <ViewportProvider>
      <Router>
        <SupportWidget />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/earn" element={<EarningsPage />} />
          <Route path="/extension" element={<ExtensionPage />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Router>
    </ViewportProvider>
  );
}

export default App;