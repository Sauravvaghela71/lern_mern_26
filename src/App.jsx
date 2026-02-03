
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/Navbar'
// import Header from './component/header'
// import Map from './component/Map'
// import MapTable from './component/MapTable'
import NetflixAbout from './component/NetflixAbout'
import NetflixHome from './component/NetflixHome'
import { Link } from 'react-router-dom'
import 
 Movies  from './component/Movies'

function App() {
  

  return (
    <>
    <Navbar></Navbar>

    <Routes>
      <Route path="/netflixHome" element={<NetflixHome />} />
      <Route path="/netflixAbout" element={<NetflixAbout />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
    {/* <Map></Map> */}
    {/* <MapTable></MapTable> */}
     {/* <Header></Header> */}
    </>
  )
}

export default App
