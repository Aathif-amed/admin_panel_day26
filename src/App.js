import "./App.css";
import Sidebar from "./Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "./fontawesome-free/css/all.css";
import "./fontawesome-free/js/all.js";
import "./css/sb-admin-2.css";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
            <Routes>
              <Route path="" element={<Dashboard/>}></Route>
              <Route path="/users" element={<Users/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
