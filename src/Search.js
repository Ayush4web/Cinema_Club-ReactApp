import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { mainUrl, useGlobalContext } from './context'

function Search() {
  const { setMovie, fetchMovie, setLoading,setError,error } = useGlobalContext()

  const [search, setSearch] = useState('')
  const handle = async (e) => {
    setLoading(true)
    e.preventDefault()
    const url = `${mainUrl}&s=${search}`
    const data = await fetchMovie(url)
    if (data.Response === 'True') {
      setMovie(data.Search)
      setLoading(false)
      setSearch('')
    }
    else {
      setLoading(false)
       setError({show:true,msg:data.Error})
    }
  }
  return (
    <section className="form">
      <form className="form-control">
        <input
          type="text"
          className="input"
          placeholder="eg. tadap"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn" onClick={handle}>
          <FaSearch />
        </button>
      </form>
      <div className="error">{error && <p>{error.msg}</p>}</div>
    </section>
  )
}

export default Search
