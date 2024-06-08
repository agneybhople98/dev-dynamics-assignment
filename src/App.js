import "./App.css";
import Dashboard from "./components/dashboard";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./components/user-details/user-details";

function App() {
  return (
    <Router>
      <div className="grid grid-cols-12 gap-4 px-4 py-4">
        <div className="col-span-12 md:col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-12 mt-3 md:col-span-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-details" element={<UserDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
