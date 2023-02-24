import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Landingpage from "./components/landingpage";
import CorporateVideos from './components/CorporateVideos'
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/corporatevideos" element={<CorporateVideos />} />
        
      </Routes>
    </div>
  );
}

export default App;
