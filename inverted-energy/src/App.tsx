import "./App.css";
import { Map } from "./features/home/map";
import Stats from "./features/stats/stats";
import { Navbar } from "./features/nav-bar/navbar.tsx";
import Safety from "./features/safety/safety.tsx";
import Performance from "./features/home/performance.tsx";

function App() {
  return (
    <div className="bg-[#011826] w-full h-screen flex flex-col">
      <div className="w-full h-[8.42vh]">
        <Navbar />
      </div>
      <div className="flex w-full h-[60vh]">
        <Performance />
        <Map />
      </div>
      <div className="flex w-full h-[40vh]">
        <Stats />
        <Safety />
      </div>
    </div>
  );
}

export default App;
