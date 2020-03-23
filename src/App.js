import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Views/Home/Home'
/* import TodoSkills from './Views/Skills/TodoSkills'
import Portfolio from './Views/Portfolio/Portfolio'
import Contact from './Views/Contact/Contact' */
import './App.css'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/'  exact component={Home} />    
        <Route path='/home'  exact component={Home} />
        {/* <Route path='/skills' component={TodoSkills} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact'  exact component={Contact} /> */}
      </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
