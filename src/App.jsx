import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Hooks } from "./hooks";
import { Hook2 } from "./hook2";
import Hero from "./components/hero";
import VisionDemo from "./components/visionDemo";
import Header from "./components/header";
import Loader from "./components/preloader";
import { Loading } from "./hooks/fuctions";

function App() {
  Hooks();
  useEffect(() => {
    Loading()
  }, [])
  
  return (
    <>
      <div id="set-height">
        <Loader/>
        <Header />
        <Hero />
        <main>
          <div id="section-1" className="fixedVid2  transition">
            <div id="borderBox" className="section2Box trasition borderRadius">
              <div className="box2 borderRadiu">
                <VisionDemo />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
