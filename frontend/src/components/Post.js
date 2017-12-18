import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, upVotePost, downVotePost } from '../actions';
import ListComments from './ListComments';

class Post extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }
  renderHeader = () => {
    return (
      <div className="pb-2n d-flex justify-content-center">
        <h4><Link to="/">Readable</Link></h4>
      </div>
    );
  };
  editPost = () => {

  };
  deletePost = () => {

  };
  createComment = () => {

  };
  render() {
    const { postId, post, upVotePost, downVotePost } = this.props;
    if(!post) {
      return null;
    }
    return (
      <div className="m-4">
        {this.renderHeader()}
        <div className="mt-2 mb-2 d-flex justify-content-between">
          <p>Score: {post.voteScore}</p>
          <div>
            <button onClick={() => this.editPost()}>edit</button>
            <button onClick={() => this.deletePost()}>delete</button>
          </div>
        </div>
        <h2>{post.title}</h2>
        <div className="mt-4 mb-4"><p>{post.body}</p></div>
        <p>Author: {post.author}</p>
        <p>Category: {post.category}</p>
        <div className="mb-2 btn-group" role="group">
          <button type="button" className="btn btn-success" onClick={() => upVotePost(post.id)}>Upvote</button>
          <button type="button" className="btn btn-danger" onClick={() => downVotePost(post.id)}>Downvote</button>
        </div>
        <div className="mt-4 mb-2 d-flex justify-content-between">
          <h4 className="mt-2">{post.commentCount} Comments</h4>
          <button onClick={() => this.createComment()}>create comment</button>
        </div>
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