import React from 'react'
import { Link } from 'react-router-dom'
import img from './no-poster-available.jpg'

function SingleMovie({ Poster, Title, Type, Year, imdbID }) {
  return (
    <Link to={`./movies/${imdbID}`}>
      <article className="container">
        <img src={Poster === 'N/A' ? img : Poster} alt={Title} />
        <div className="info">
          <h2>{Title}</h2>
          <div className="lower">
            <p> Genre : {Type}</p>
            <p>Year : {Year}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default SingleMovie
