import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./common/header";
import Footer from "./common/footer";
import Typeslider from "./component/Typeslider";
import Scrolltotop from "./component/Scrollredirection";
import Footerstickycontent from "./component/Footerstickycontent";

const App = () => {
  // document.designMode="on"
  return (
    <div>
      <Scrolltotop />
      <Header />
      <Typeslider />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <Footerstickycontent />
    </div>
  );
};

export default App;
