import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const PostItem = ({ post }) => (
  <li className="list-group-item" key={post.id}>
    <Link to={`/view/${post.id}`}>{post.title}</Link>
  </li>
);


PostItem.propTypes = {
  post: PropTypes.object,
}

export default PostItem;