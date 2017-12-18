import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, upVotePost, downVotePost} from '../actions';
import PostItem from './PostItem';
import Categories from './Categories';

class ListPosts extends React.Component {
  state = {
    sortByDate: false,
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  sortByDate = sortByDate => {
    this.setState({ sortByDate });
  };

  renderHeader = () => {
    return (
      <div className="pb-2 d-flex justify-content-between">
        <div />
        <h1><Link to="/">Readable</Link></h1>
        <button type="button" className="btn btn-light">create post</button>
      </div>
    );
  };

  renderSort = () => {
    return (
      <ul>
        Sort by: <button onClick={() => this.sortByDate(true)}>date</button> <button onClick={() => this.sortByDate(false)}>score</button>
      </ul>
    );
  };

  renderPosts = () => {
    let { posts } = this.props;
    // Sort
    if (this.state.sortByDate) {
      posts = _.sortBy(posts, post => {
        return post.timestamp + '';
      }).reverse();
    } else {
      posts = _.sortBy(posts, ['voteScore']).reverse();
    }
    if (Object.keys(posts).length === 0) {
      return <p>0 posts</p>;
    }
    const { upVotePost, downVotePost } = this.props;
    return Object.keys(posts).map(key => {
      return <PostItem post={posts[key]} upVotePost={upVotePost} downVotePost={downVotePost} />;
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

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.match.params.category;
  let posts = state.posts;
  if (category) {
    posts = _.filter(posts, post => {
      return post.category === category;
    });
  }
  return { posts };
};

export default connect(mapStateToProps, { fetchPosts, upVotePost, downVotePost })(ListPosts);
