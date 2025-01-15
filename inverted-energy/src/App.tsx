import "./App.css";
import { Navbar } from "./features/nav-bar/navbar";
import { Map } from "./features/home/map";
import Stats from "./features/stats/stats";

function App() {
  return (
    <div className="bg-[#011826] w-screen h-[100vh]">
      <Navbar />
      <div>
        <Map />
        <Stats/>
      </div>
    </div>
  );
}

export default App;
