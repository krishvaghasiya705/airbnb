import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./common/header";
import Footer from "./common/footer";
import Scrolltotop from "./component/Scrollredirection";
import Helppage from "./pages/help";
// import ModelPage from "./pages/modelpage";

const App = () => {
  // document.designMode="on"
  return (
    <div>
      <Scrolltotop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Helppage />} />
          {/* <Route path="/modelpage" element={<ModelPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;