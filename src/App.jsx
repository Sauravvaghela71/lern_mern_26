
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
import { UserContext } from './component/store/UserContext'
import Dropdown from './component/Dropdown'
import ParentContext from './component/ParentContext'
import UseReducer from './component/UseReducer'
import UseReducer2 from './component/UseReducer2'
import UseMemo from './component/UseMemo'

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
      <Route path="/dropdown" element={<Dropdown />} />
      <Route path="/parentcontext" element={<ParentContext />} />
      <Route path="/usereducer" element={<UseReducer />} />
      <Route path="/usereducer2" element={<UseReducer2 />} />
      <Route path="/usememo" element={<UseMemo />} />
      


    </Routes>
    {/* <Map></Map> */}
    {/* <MapTable></MapTable> */}
     {/* <Header></Header> */}
    </>
  )
}

export default App
