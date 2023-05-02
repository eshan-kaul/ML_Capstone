import React from 'react';
import './App.css';
import Sidebar2 from "./components/Sidebar";
import NotFound from './pages/NotFound';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useNavigate,
    NavLink,
    Outlet
  } from "react-router-dom";

  import Home from "./pages/Home"
  import ProjectResults from "./pages/ProjectResults";
function App() {
  const textColor = { color: 'white'}
 
  return (
    <div id="app" style={({ height: "100vh", backgroundColor: 'white' }, { display: "flex" })}>
      <Sidebar2/>
      <main>
        {/* Routing. For the sidebar buttons, the rest of the code is in Sidebar
        TODO: Fix the repository button to link to the github repo, or create a page 
        that has the link.
        TODO: Fix the notfound route. */}
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/project-results" element={<ProjectResults />} />
            <Route path='/code' Component={()=>{
              window.location.replace("https://github.com/eshan-kaul/ML_Cap")
            }}/>
            <Route path='/not-found' element={<NotFound />} />
          </Routes>
          <Outlet/>
      </main>
    </div>
  );
}

export default App;
