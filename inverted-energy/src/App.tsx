import './App.css'
import { Navbar } from './features/nav-bar/navbar'
import { Map } from './features/home/map'
import { Performance } from './features/home/performance'

function App() {

  return (
    <>
      <Navbar />
      <div className='flex flex-row'>
        <Performance />
        <Map />
      </div>
    </>
  )
}

export default App
