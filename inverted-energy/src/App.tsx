import './App.css'
import { Navbar } from './features/nav-bar/navbar'
import { Map } from './features/home/map'
import { Performance } from './features/home/performance'
import Stats from "./features/stats/stats";

function App() {
  return (
    <div className="bg-[#011826] w-screen h-[100vh]">
      <Navbar />
      <div className='flex flex-row'>
        <Performance />
        <Map />
        <Stats/>
      </div>
    </div>
  );
}

export default App;
