import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./fontawesome-free/css/all.css";
import "./fontawesome-free/js/all.js";
import "./css/sb-admin-2.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Usercreate from "./UserCreate"
import Users from "./Users";
import Viewuser from "./Viewuser";
import Edituser from "./Edituser";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content" className="mt-5">
            <Routes>
              <Route path="" element={<Dashboard/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route path="/createUser" element={<Usercreate/>}/>
              <Route path="/view/:id" element={<Viewuser/>}/>
              <Route path="/edit/:id" element={<Edituser/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
