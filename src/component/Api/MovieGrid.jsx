import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function MovieGrid() {

  const [movie, setMovies] = useState([])
  const [moviename, setMoviename] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const apicalling = async ()=>{
    if (!moviename) {
      setMovies([])
      }

     try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=3bb2214a&s=${moviename}`
      );

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setError("");
      } else {
        setMovies([]);
        setError(response.data.Error); // Movie not found!
      }
    } catch (err) {
      console.log(err);
      
      setError("Something went wrong!");
      setMovies([]);
    }
  }


  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>

        <h3 style={{color:"red"}}>MOVIES GRID</h3>
        
                    <input
                      type="text"
                      placeholder="Enter movie name"
                      value={moviename}
                      onChange={(e) => setMoviename(e.target.value)}
                      style={{
                        padding: "10px",
                        width: "250px",
                        marginRight: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                    />

                <button
                  onClick={apicalling}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#ff0000",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                SEARCH
                </button>

      </div>

      {error && (
          <p style={{ color: "red", marginTop: "15px" }}>{error}</p>
        )}
      


      {movie.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            padding: "20px",
          }}
        >
          {movie.map((u) => (
            <div
              key={u.imdbID}
              style={{
                background: "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={u.Poster}
                alt={u.Title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px", textAlign: "center" }}>
                <h3>{u.Title}</h3>
                <p style={{ color: "gray" }}>{u.Year}</p>
                <p>{u.Type}</p>
                <button onClick={()=>{navigate(`/movie/${u.imdbID}`)}}>VIEW DETAILS</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
  

export default MovieGrid 