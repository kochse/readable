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
    const posts = this.props.posts;
    if(Object.keys(posts).length === 0) {
      return <p>0 posts</p>;
    }
    return Object.keys(posts).map(key => {
      return <PostItem post={posts[key]} />;
    });
  };

  render() {
    return (
      <div className="p-5">
        <div className="pb-2 d-flex justify-content-between">
          <h1>Readable</h1>
          <button type="button" className="btn btn-light">create post</button>
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <ul><li><a href="#">Category 1</a></li><li><a href="#">Category 2</a></li></ul>
          <ul>Sort: <a href="#">date</a> <a href="#">score</a></ul>
        </div>
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
