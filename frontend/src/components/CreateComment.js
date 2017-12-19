import React from 'react';
import { uuidv4 } from '../utils/helpers';

class CreateComment extends React.Component {
  state = {
    body: '',
    author: '',
  };
  handleBodyChange = event => {
    this.setState({ ...this.state, body: event.target.value });
  };
  handleAuthorChange = event => {
    this.setState({ ...this.state, author: event.target.value });
  };
  handleCreateComment = event => {
    event.preventDefault();
    const comment = {
      id: uuidv4(),
      parentId: this.props.parent,
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author,
      voteScore: 0,
      deleted: false,
      parentDeleted: false,
    };
    this.props.createComment(comment);
  };

  render() {
    return (
      <div className="mb-4 p-4">
        <h2>Create comment</h2>
        <form onSubmit={event => this.handleCreateComment(event)}>
          <div className="form-group">
            <label>Body</label>
            <textarea
              className="form-control"
              rows="3"
              value={this.state.body}
              onChange={this.handleBodyChange}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              className="form-control"
              placeholder="Enter author"
              value={this.state.author}
              onChange={this.handleAuthorChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Comment
          </button>
        </form>
      </div>
    );
  }
}

export default CreateComment;
