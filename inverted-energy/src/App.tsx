import "./App.css";
import { Map } from "./features/home/map";
import Stats from "./features/stats/stats";
import { Navbar } from "./features/nav-bar/navbar.tsx";
import Safety from "./features/safety/safety.tsx";
import Performance from "./features/home/performance.tsx";

function App() {
  return (
    <div className="bg-[#011826] w-full h-screen flex flex-col">
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-1 flex-row">
        <Performance />
        <Map />
      </div>
      <div className="flex flex-1 flex-row">
        <Stats />
        <Safety />
      </div>
    </div>
  );
}

export default App;
