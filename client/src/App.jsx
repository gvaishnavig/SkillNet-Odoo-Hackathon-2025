import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ViewProfile from "./pages/ViewProfile";
import SwapRequestForm from "./pages/SwapRequestForm";
import SwapRequests from "./pages/SwapRequests";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/view/:userId" element={<ViewProfile />} />
        <Route path="/request/:userId" element={<SwapRequestForm />} />
        <Route path="/swap-requests" element={<SwapRequests />} />
      </Routes>
    </Router>
  );
}

export default App;

