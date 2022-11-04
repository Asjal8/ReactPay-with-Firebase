import React from "react";
import AllComponents from "./AllComponents";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import Service from "./pages/Service";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<AllComponents />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};

export default App;
