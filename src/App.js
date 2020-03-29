import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar'
import Home from './Views/Home/Home'
import Skills from './Views/Skills/Skills'
import Portfolio from './Views/Portfolio/Portfolio'
import Contact from './Views/Contact/Contact'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/'  exact component={Home} />    
        <Route path='/home'  exact component={Home} />
        <Route path='/skills' component={Skills} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact'  exact component={Contact} />
      </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
