import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Post from './Post';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
import ListPosts from './ListPosts';
import './App.css';

const App = () => (
  <div className="container-fluid">
    <Switch>
      <Route exact path="/" component={ListPosts} />
      <Route exact path="/create" component={CreatePost} />
      <Route exact path="/:category" component={ListPosts} />
      <Route exact path="/:category/:postId/update" component={UpdatePost} />
      <Route exact path="/:category/:postId" component={Post} />
    </Switch>
  </div>
);

export default App;
