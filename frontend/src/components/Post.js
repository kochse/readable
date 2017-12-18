import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, upVotePost, downVotePost, deletePost, createComment } from '../actions';
import ListComments from './ListComments';
import CreateComment from './CreateComment';

class Post extends React.Component {
  state = {
    showCreateComment: false,
  };
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
  handleDeletePost = () => {
    this.props.deletePost(this.props.postId);
    this.props.history.push('/');
  };
  createComment = () => {
    if(!this.state.showCreateComment) {
      this.setState({ ...this.state, showCreateComment: true });
    } else {
      this.setState({ ...this.state, showCreateComment: false });
    }
  };
  handleCreateComment = (comment) => {
    this.props.createComment(comment);
    this.setState({ ...this.state, showCreateComment: false });
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
            <Link to={`/${post.category}/${post.id}/update`}><button>edit</button></Link>
            <button onClick={() => this.handleDeletePost()}>delete</button>
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
        { this.state.showCreateComment && <CreateComment parent={this.props.postId} createComment={this.handleCreateComment}/> }
        <ListComments postId={postId} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  postId: ownProps.match.params.postId,
  post: state.posts[ownProps.match.params.postId],
});

export default connect(mapStateToProps, { fetchPost, upVotePost, downVotePost, deletePost, createComment })(Post);