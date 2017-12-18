import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, upVotePost, downVotePost } from '../actions';
import ListComments from './ListComments';

class Post extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }
  render() {
    const { postId, post, upVotePost, downVotePost } = this.props;
    if(!post) {
      return null;
    }
    return (
      <div className="m-4">
        <p>Score: {post.voteScore}</p>
        <h2>{post.title}</h2>
        <div className="mt-4 mb-4"><p>{post.body}</p></div>
        <p>Author: {post.author}</p>
        <p>Category: {post.category}</p>
        <div className="mb-2 btn-group" role="group">
          <button type="button" className="btn btn-success" onClick={() => upVotePost(post.id)}>Upvote</button>
          <button type="button" className="btn btn-danger" onClick={() => downVotePost(post.id)}>Downvote</button>
        </div>
        <h4 className="mt-4">{post.commentCount} Comments</h4>
        <ListComments postId={postId} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  postId: ownProps.match.params.postId,
  post: state.posts[ownProps.match.params.postId],
});

export default connect(mapStateToProps, { fetchPost, upVotePost, downVotePost })(Post);