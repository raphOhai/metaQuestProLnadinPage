import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Hooks } from "./hooks";
import { Hook2 } from "./hook2";
import Hero from "./components/hero";
import VisionDemo from "./components/visionDemo";
import Header from "./components/header";

function App() {
  Hooks();
  return (
    <>
      <div id="set-height">
        <Header/>
        <Hero />
        <main>
          <div id="section-1" className="fixedVid2  transition ">
            <div className="section2Box">
              <div className="box2 ">
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
