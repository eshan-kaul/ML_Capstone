import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import Page2 from "./pages/Page2";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function Routing() {
    return (
        <BrowserRouter>
            {/* <Routes>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/page-2" component={Page2}/>
                <Route component={NotFound}/>
            </Routes> */}
        </BrowserRouter>
    )
}

export default Routing;