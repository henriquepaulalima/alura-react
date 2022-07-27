import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404';
import Cabelho from './components/Cabecalho';
import Post from './paginas/Post';

function App() {
  return (
    <BrowserRouter>
      <Cabelho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
