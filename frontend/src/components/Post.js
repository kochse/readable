import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import ListComments from './ListComments';

class Post extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }
  render() {
    const { postId, post } = this.props;
    if(!post) {
      return <p>no matching post</p>;
    }
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Author: {post.author}</p>
        <p>Category: {post.category}</p>
        <p>Score: {post.voteScore}</p>
        <p>Comments: {post.commentCount}</p>
        <ListComments postId={postId} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  postId: ownProps.match.params.postId,
  post: state.posts[ownProps.match.params.postId],
});

export default connect(mapStateToProps, { fetchPost })(Post);