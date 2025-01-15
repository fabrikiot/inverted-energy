import './App.css'
import { Map } from './features/home/map'
import { Performance } from './features/home/performance'
import Stats from "./features/stats/stats";
import { Navbar } from './features/nav-bar/navbar.tsx'

function App() {
  return (
    <div className="bg-[#011826] w-full h-screen flex flex-col">
      <div className="h-[10%]">
        <Navbar />
      </div>
      <div className='flex flex-row'>

        <Performance />
        <Map />

      </div>
      <div className="flex flex-row">

        <Stats />
        <Stats />
        
      </div>
    </div>

  );
}

export default App;
