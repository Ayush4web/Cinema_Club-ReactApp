import React from 'react'
import { useGlobalContext } from './context'
import SingleMovie from './SingleMovie'
import Loading from './Loading'
function Movie() {
  const {movie,loading} = useGlobalContext()
   
  if(loading){
    return (
      <Loading/>
    ) 
  }
  return (
    <section className='movie'>
       
      {movie.map((item)=>{
        return <SingleMovie key={item.imdbID} {...item} />
      })}
    </section>
  )
}

export default Movie