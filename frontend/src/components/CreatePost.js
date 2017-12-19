import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories, createPost } from '../actions';
import { uuidv4 } from '../utils/helpers';

class CreatePost extends React.Component {
  state = {
    category: 'default',
    title: '',
    body: '',
    author: '',
  };

  handleCategoryChange = event => {
    this.setState({ ...this.state, category: event.target.value });
  };
  handleTitleChange = event => {
    this.setState({ ...this.state, title: event.target.value });
  };
  handleBodyChange = event => {
    this.setState({ ...this.state, body: event.target.value });
  };
  handleAuthorChange = event => {
    this.setState({ ...this.state, author: event.target.value });
  };

  componentDidMount() {
    this.props.fetchCategories();
  }
  renderHeader = () => {
    return (
      <div className="pb-2n d-flex justify-content-center">
        <h4>
          <Link to="/">Readable</Link>
        </h4>
      </div>
    );
  };
  renderCategories = () => {
    const { categories } = this.props;
    return Object.keys(categories).map(key => {
      return (
        <option value={categories[key].path} key={key}>
          {categories[key].name}
        </option>
      );
    });
  };

  handleCreatePost = event => {
    event.preventDefault();
    const post = {
      id: uuidv4(),
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category,
      voteScore: 0,
      deleted: false,
      commentCount: 0,
    };
    this.props.createPost(post);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="m-4">
        {this.renderHeader()}
        <h2>Create post</h2>
        <form onSubmit={event => this.handleCreatePost(event)}>
          <div className="form-group">
            <label>Category</label>
            <select
              className="form-control"
              value={this.state.category}
              onChange={this.handleCategoryChange}>
              {this.renderCategories()}
            </select>
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              placeholder="Enter title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
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
            Create Post
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { fetchCategories, createPost })(CreatePost);
