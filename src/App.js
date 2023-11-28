import { Routes, Route } from "react-router-dom";
import './App.scss';
import './styles/dashboard.scss';
import './styles/campaigns.scss';
import Sidebar from './components/Sidebar';
import NotFound from './pages/NotFound'
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";

function App() {
  return (
    <div className="App">
      <div className="container-fluid ">
        <div className="row flex-nowrap">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
