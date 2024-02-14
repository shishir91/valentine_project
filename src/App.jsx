import React, { useEffect } from "react";
import First from "./First";
import Second from "./Second";
import Aos from "aos";
import "bootstrap/dist/css/bootstrap.css";
import "aos/dist/aos.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="main" style={{ display: "block" }}>
        <First />
      </div>
      {/* </div> */}
    </>
  );
};

export default App;
