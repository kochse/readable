import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import PostItem from './PostItem';
import Categories from './Categories';

class ListPosts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderHeader = () => {
    return (
      <div className="pb-2 d-flex justify-content-between">
        <div />
        <h1>Readable</h1>
        <button type="button" className="btn btn-light">create post</button>
      </div>
    );
  };

  renderSort = () => {
    return (
      <ul>
        Sort: <a href="">date</a> <a href="">score</a>
      </ul>
    );
  };

  renderPosts = () => {
    let { posts } = this.props;
    const { match } = this.props;
    const category = match.params.category;
    if(category) {
      posts = _.filter(posts, (post) => {
        return post.category === category;
      });
    }
    if(Object.keys(posts).length === 0) {
      return <p>0 posts</p>;
    }
    return Object.keys(posts).map(key => {
      return <PostItem post={posts[key]} />;
    });
  };

  render() {
    return (
      <div className="m-4">
        {this.renderHeader()}
        <div className="mt-3 d-flex justify-content-between">
          <Categories current={this.props.match.params.category} />
          {this.renderSort()}
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
