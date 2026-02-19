import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <>
    
    <nav style={{background:"pink"}} class="navbar navbar-expand-lg navbar-light " >
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/netflixHome">Home</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/netflixAbout">About</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/movies">movies</Link>

        </li>

         <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/usestate">usesate</Link>

        </li>

         <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/useform">useform</Link>

        </li>

          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/dropdown">dropdown</Link>

        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/parentcontext">parentcontext</Link>

        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/usereducer">usereducer</Link>

        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/usereducer2">UseReducer2</Link>

        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/usememo">usememo</Link>

        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/axios">axios</Link>

        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/axios2">axios2</Link>

        </li>

         <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/movieGrid">Movie Grid</Link>

        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/postapi">Post Api</Link>

        </li>


       
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
