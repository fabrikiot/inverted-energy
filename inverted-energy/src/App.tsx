import "./App.css";
import { Map } from "./features/home/map";
import Stats from "./features/stats/stats";
import { Navbar } from "./features/nav-bar/navbar.tsx";
import Safety from "./features/safety/safety.tsx";
import Performance from "./features/home/performance.tsx";

function App() {

  return (
    <div className="bg-[#011826] w-full h-screen flex flex-col relative">
      <div className="w-full h-[7.5vh]">
        <Navbar />
      </div>
      <div className="flex w-full h-[62.4vh] pt-3 px-4">
        <Performance />
        <Map />
      </div>
      <div className="flex w-full h-[30vh] px-4 justify-between">
        <Stats />
        <Safety />
      </div>
    </div>
  );
}

export default App;
