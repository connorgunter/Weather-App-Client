import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App.jsx'
import Auth0ProviderWithNavigate from "./components/Auth/AuthProvider.jsx";
import "./index.css"
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
  </Router>
);