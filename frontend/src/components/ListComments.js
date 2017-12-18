import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchComments, upVoteComment, downVoteComment, deleteComment, updateComment } from '../actions';
import Comment from './Comment';

class ListComments extends React.Component {
  componentDidMount() {
    this.props.fetchComments(this.props.postId);
  }

  handleDeleteComment = (comment) => {
    this.props.deleteComment(comment);
  }

  renderComments = () => {
    const { comments, upVoteComment, downVoteComment, updateComment } = this.props;
    return Object.keys(comments).map(key => {
      return <Comment key={key} comment={comments[key]} upVoteComment={upVoteComment} downVoteComment={downVoteComment} deleteComment={this.handleDeleteComment} updateComment={updateComment}/>;
    });
  };

  render() {
    const { comments } = this.props;
    if(Object.keys(comments).length === 0) {
      return null;
    }
    return (
      <div>
        {this.renderComments()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let comments = _.filter(state.comments, comment => {
    return comment.parentId === ownProps.postId && !comment.deleted
  });
  comments = _.sortBy(comments, ['voteScore']).reverse();
  return { comments };
};

export default connect(mapStateToProps, { fetchComments, upVoteComment, downVoteComment, deleteComment, updateComment })(ListComments);
