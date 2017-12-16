import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import PostItem from './PostItem';

class ListPosts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return this.props.posts.map(post => {
      return <PostItem post={post} />;
    });
  };

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

ListPosts.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.Array,
};

const mapStateToProps = (state, ownProps) => ({
  // filter by category via ownProps
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(ListPosts);
