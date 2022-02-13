import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { mainUrl, useGlobalContext } from './context'
import Loading from './Loading'

function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const { loading, setLoading, setError, error } = useGlobalContext()
  const fetchMovieDetail = async (id) => {
    setLoading(true)
    const url = `${mainUrl}&i=${id}&plot=full`
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    if (data.Response === 'True') {
      console.log(data)
      setMovie(data)
      setLoading(false)
    } else {
      setLoading(false)
      setError({ show: true, msg: data.Error })
    }
  }
  useEffect(() => {
    fetchMovieDetail(id)
  }, [id])
  if (loading) {
    return <Loading />
  }
  if (error.show) {
    return (
      <section className="errorDetail">
        <h2>{error.msg}</h2>
        <Link to="/" className="fix">
          <button className="single-btn">Back To Movie</button>
        </Link>
      </section>
    )
  }
  return (
    <>
      <section className="movieDetail">
        <div className="single-img">
          <img src={movie.Poster} alt="" />
        </div>
        <div className="single-info">
          <h2>{movie.Title}</h2>
          <div className="underline"></div>
          <p className="plot">{movie.Plot}</p>
          <h3 className="cast">Cast - {movie.Actors}</h3>
          <div className="line">
            <h3>Released on {movie.Released}</h3>
            <h3>IMDB Rating - {movie.imdbRating}</h3>
          </div>
          <Link to="/" className="fix">
            <button className="single-btn">Back To Movie</button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default MovieDetail
