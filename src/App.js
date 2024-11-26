import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AssistantPage from "./pages/AssistantPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SubscriptionPage from "./pages/SubscriptionPage.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/assistant" element={<AssistantPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
