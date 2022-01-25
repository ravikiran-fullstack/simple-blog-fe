import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";

import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Nav></Nav>
      <Switch>
        <Route path='/' exact>
          <Home></Home>
        </Route>
        <Route path='/post' exact>
          <NewPost></NewPost>
        </Route>
        <Route path='/post/:id'>
          <PostPage></PostPage>
        </Route>
        <Route path='/about' component={About}></Route>
        <Route path='*' component={Missing}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
