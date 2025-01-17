import { useState, useEffect } from "react";
import "./App.css";
import { Map } from "./features/home/map";
import Stats from "./features/stats/stats";
import { Navbar } from "./features/nav-bar/navbar.tsx";
import Safety from "./features/safety/safety.tsx";
import Performance from "./features/home/performance.tsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#011826] w-full h-screen flex flex-col relative">
      {/* {loading && (
        <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#0118267e] z-50">
          <div className="loader"></div>
        </div>
      )} */}
      <div className="w-full h-[7.5vh]">
        <Navbar />
      </div>
      <div className="flex w-full h-[65vh] pt-3 px-4">
        <Performance />
        <Map />
      </div>
      <div className="flex w-full h-[23vh] px-4">
        <Stats />
        <Safety />
      </div>
    </div>
  );
}

export default App;
