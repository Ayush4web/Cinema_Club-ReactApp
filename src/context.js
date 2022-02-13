import React, { useContext, useEffect, useRef, useState } from 'react'
import data from './data'

export const mainUrl = `https://www.omdbapi.com/?apikey=a4b41733`


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState(data.Search)
  const [error,setError] = useState({show:false,msg:''})

  const fetchMovie = async (url) => {
    setLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json()
     
      return data
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <AppContext.Provider
      value={{ movie, setMovie, loading, fetchMovie, setLoading,error,setError}}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
