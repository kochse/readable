import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories, updatePost } from '../actions';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    if(this.props.post) {
      this.state = {
        title: props.post.title,
        body: props.post.body,
      };
    }

  }
  componentDidMount() {
    this.props.fetchCategories();
  }

  handleTitleChange = (event) => {
    this.setState({ ...this.state, title: event.target.value})
  };
  handleBodyChange = (event) => {
    this.setState({ ...this.state, body: event.target.value})
  };

  renderHeader = () => {
    return (
      <div className="pb-2n d-flex justify-content-center">
        <h4><Link to="/">Readable</Link></h4>
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

  handleUpdatePost = (event) => {
    event.preventDefault();
    const post = {
      id: this.props.postId,
      title: this.state.title,
      body: this.state.body,
    };
    this.props.updatePost(post);
    this.props.history.push(`/${this.props.post.category}/${post.id}`);
  };

  render() {
    if(!this.props.post) {
      return null;
    }
    return (
      <div className="m-4">
        {this.renderHeader()}
        <h2>Create post</h2>
        <form id="updatePost" onSubmit={(event) => this.handleUpdatePost(event)}>
          <div className="form-group">
            <label>Category</label>
            <select className="form-control" value={this.props.post.category} disabled >
              {this.renderCategories()}
            </select>
          </div>
          <div className="form-group">
            <label>Title</label>
            <input className="form-control" placeholder="Enter title" value={this.state.title} onChange={this.handleTitleChange} />
          </div>
          <div className="form-group">
            <label>Body</label>
            <textarea className="form-control" rows="3" value={this.state.body} onChange={this.handleBodyChange} />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input className="form-control" placeholder="Enter author" value={this.props.post.author} readOnly />
          </div>
          <button type="submit" className="btn btn-primary">
            Update Post
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  categories: state.categories,
  postId: ownProps.match.params.postId,
  post: state.posts[ownProps.match.params.postId],
});

export default connect(mapStateToProps, { fetchCategories, updatePost })(CreatePost);