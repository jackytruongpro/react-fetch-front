import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import ForgotPassword from './pages/forgotPassword/forgotPassword';
import Articles from './pages/articles/articles';
import WriteArticle from './pages/writeArticle/writeArticle';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/writeArticle" component={WriteArticle} />
      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App
