
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/Navbar'
// import Header from './component/header'
// import Map from './component/Map'
// import MapTable from './component/MapTable'
import NetflixAbout from './component/NetflixAbout'
import NetflixHome from './component/NetflixHome'
import Error from './component/Error'
import { Link } from 'react-router-dom'
import Movies  from './component/Movies'
import Watch from './component/Watch'
import Usestate from './component/Usestate'
import Map from './component/Map'
import UseForm from './component/UseForm'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    {/* <Map></Map> */}

    <Routes>
      <Route path="/netflixHome" element={<NetflixHome />} />
      <Route path="/netflixAbout" element={<NetflixAbout />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/watch/:name" element={<Watch />} />
      <Route path="/*" element={<Error />} />
      <Route path="/usestate" element={<Usestate />} />
      <Route path="/useform" element={<UseForm />} />


    </Routes>
    {/* <Map></Map> */}
    {/* <MapTable></MapTable> */}
     {/* <Header></Header> */}
    </>
  )
}

export default App
