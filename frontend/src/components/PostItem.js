import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const PostItem = ({ post }) => (
  <li className="list-group-item" key={post.id}>
    <div className="mt-2 mb-2 d-flex justify-content-between"><span>Score: {post.voteScore}</span><div><a href="">edit</a> <a href="">delete</a></div></div>
    <div className="mt-2 mb-2"><Link to={`/view/${post.id}`}><h3>{post.title}</h3></Link></div>
    <div className="mb-2"><span>Author: {post.author}</span> </div>
    <div className="mb-2"><span>{post.commentCount} Comments</span></div>
    <div className="mb-2 btn-group" role="group">
      <button type="button" className="btn btn-success">Upvote</button>
      <button type="button" className="btn btn-danger">Downvote</button>
    </div>
  </li>
);


PostItem.propTypes = {
  post: PropTypes.object,
}

export default PostItem;