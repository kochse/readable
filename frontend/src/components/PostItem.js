import React from 'react';
import PropTypes from 'prop-types';

const PostItem = ({ post }) => (
  <li className="list-group-item">{post.title}</li>
);


PostItem.propTypes = {
  post: PropTypes.object,
}

export default PostItem;