import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchComments } from '../actions';

class ListComments extends React.Component {
  componentDidMount() {
    this.props.fetchComments(this.props.postId);
  }

  renderComment = (comment) => {
    return <li>{comment.body}</li>;
  }

  renderComments = () => {
    const { comments } = this.props;
    if(Object.keys(comments).length === 0) {
      return <p>0 comments</p>;
    }
    return Object.keys(comments).map(key => {
      return this.renderComment(comments[key]);
    });
  };

  render() {
    return (
      <div>
        <h1>Comments</h1>
        {this.renderComments()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  comments: _.filter(state.comments, comment => {
    return comment.parentId === ownProps.postId
  }),
});

export default connect(mapStateToProps, { fetchComments })(ListComments);
