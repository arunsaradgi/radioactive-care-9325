import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Landingpage from "./components/landingpage";
import CorporateVideos from './components/CorporateVideos'
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/corporatevideos" element={<CorporateVideos />} />
        <Route path="/contactus" element={<ContactUs />} />
      
      </Routes>
    </div>
  );
}

export default App;
