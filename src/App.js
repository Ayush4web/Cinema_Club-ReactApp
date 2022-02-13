import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import MovieDetail from './MovieDetail'
import { useGlobalContext } from './context'


function App() {
  const {error} = useGlobalContext()
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
      
        <Route path="/movies/:id">
          <MovieDetail/>
        </Route>
        <Footer />
      </Router>
    </>
  )
}

export default App
