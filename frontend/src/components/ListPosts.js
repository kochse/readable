import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, upVotePost, downVotePost, deletePost } from '../actions';
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
      <div className="pb-2">
        <div className="d-flex justify-content-center">
          <h4><Link to="/">Readable</Link></h4>
        </div>
        <Link to="/create"><button type="button" className="btn btn-light">create post</button></Link>
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
    let { posts, deletePost } = this.props;
    if (this.state.sortByDate) {
      posts = _.sortBy(posts, post => {
        return post.timestamp + '';
      }).reverse();
    }
    if (Object.keys(posts).length === 0) {
      return <p>0 posts</p>;
    }
    const { upVotePost, downVotePost } = this.props;
    return Object.keys(posts).map(key => {
      return <PostItem post={posts[key]} upVotePost={upVotePost} downVotePost={downVotePost} key={key} deletePost={deletePost} />;
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

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.match.params.category;
  let posts = state.posts;
  posts = _.filter(posts, post => {
    return !post.deleted;
  });
  if (category) {
    posts = _.filter(posts, post => {
      return post.category === category;
    });
  }
  posts = _.sortBy(posts, ['voteScore']).reverse();
  return { posts };
};

export default connect(mapStateToProps, { fetchPosts, upVotePost, downVotePost, deletePost })(ListPosts);
