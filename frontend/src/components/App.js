import React from 'react';
import { Route } from 'react-router-dom';
import Post from './Post';
import ListPosts from './ListPosts';
import './App.css';

const App = () => (
  <div className="container-fluid">
    <Route exact path="/" component={ListPosts} />
    <Route exact path="/:category" component={ListPosts} />
    <Route path="/:category/:postId" component={Post} />
  </div>
);

export default App;
