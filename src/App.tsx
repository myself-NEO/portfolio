import React from "react";
import Header from "./components/Header";
// import AppRoutes from "./components/Routes/AppRoutes";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DsaPathway from "./components/DSApathway";
import NotFound from "./components/Common";

function App() {
  return (
    <>
      <Header />
      {/* <AppRoutes /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dsapathway" element={<DsaPathway />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
