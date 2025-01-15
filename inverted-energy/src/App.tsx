import './App.css'
import { Navbar } from './features/nav-bar/navbar'
import { Map } from './features/home/map'

function App() {

  return (
    <>
      <Navbar />
      <div>
        <Map />
      </div>
    </>
  )
}

export default App
