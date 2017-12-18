import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    if(props.comment) {
      this.state = {
        showEdit: false,
        body: props.comment.body,
        author: props.comment.author,
      };
    }
  }
  handleBodyChange = (event) => {
    this.setState({ ...this.state, body: event.target.value})
  };

  handleEdit = () => {
    this.setState({ ...this.state, showEdit: true });
  };

  handleUpdateComment = (event) => {
    event.preventDefault();
    const comment = {
      id: this.props.comment.id,
      parentId: this.props.comment.parentId,
      body: this.state.body,
    };
    this.props.updateComment(comment);
    this.setState({ ...this.state, showEdit: false });
  };

  render() {
    const { comment, upVoteComment, downVoteComment, deleteComment } = this.props;

    if (!comment) {
      return null;
    }
    if (this.state.showEdit) {
      return (
        <div className="mb-4 p-4">
          <h4>Edit comment</h4>
          <form onSubmit={(event) => this.handleUpdateComment(event)}>
            <div className="form-group">
              <label>Body</label>
              <textarea className="form-control" rows="3" value={this.state.body} onChange={this.handleBodyChange} />
            </div>
            <div className="form-group">
              <label>Author</label>
              <input className="form-control" placeholder="Enter author" value={this.props.comment.author} readOnly />
            </div>
            <button type="submit" className="btn btn-primary">
              Update Comment
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <li className="list-group-item" key={comment.id}>
          <div className="mt-2 mb-2 d-flex justify-content-between">
            <p>Score: {comment.voteScore}</p>
            <div>
              <button onClick={() => this.handleEdit()}>edit</button>
              <button onClick={() => deleteComment(comment)}>delete</button>
            </div>
          </div>
          <p>{comment.body}</p>
          <p>Author: {comment.author}</p>
          <div className="mb-2 btn-group" role="group">
            <button type="button" className="btn btn-success btn-sm" onClick={() => upVoteComment(comment.id)}>Upvote</button>
            <button type="button" className="btn btn-danger btn-sm" onClick={() => downVoteComment(comment.id)}>Downvote</button>
          </div>
        </li>
      );
    }
  }
}

export default Comment;
