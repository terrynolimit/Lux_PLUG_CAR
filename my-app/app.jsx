import React from 'react'
import{Browserouter,Routes,Route } from "react-router-dom";

import Home from "./home";
import SignUp from "./SignUp";
import Login from "./Login";
import Dashboard from "./Dashboard";

function app() {
  return (
    <BrowseRouter>
        <Routes>
            {/* home */}
            <Route path="/" element={<home />} />
            {/* Login */}
             <Route path="/" element={< Login  />} />
            {/* SignUp */}
             <Route path="/" element={<SignUp />} />
            
            {/*Dashboard */}
              <Route path="/" element={<Dashboard/>} />

        
        </Routes>
    </BrowseRouter>
  )
}

export default app