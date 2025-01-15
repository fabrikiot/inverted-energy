import "./App.css";
import { Navbar } from "./features/nav-bar/navbar";
import { Map } from "./features/home/map";
import { Performance } from "./features/home/performance";
import Stats from "./features/stats/stats";
import Safety from "./features/safety/safety";

function App() {
  return (
    <div className="bg-[#011826] w-screen h-[100vh]">
      <Navbar />
      <div className="flex flex-col">
        {/* <Performance />
        <Map /> */}
        {/* <Stats /> */}
        <Safety />
      </div>
    </div>
  );
}

export default App;
