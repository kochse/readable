import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchComments, upVoteComment, downVoteComment } from '../actions';
import Comment from './Comment';

class ListComments extends React.Component {
  componentDidMount() {
    this.props.fetchComments(this.props.postId);
  }

  renderComments = () => {
    const { comments, upVoteComment, downVoteComment } = this.props;
    return Object.keys(comments).map(key => {
      return <Comment key={key} comment={comments[key]} upVoteComment={upVoteComment} downVoteComment={downVoteComment} />;
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

const mapStateToProps = (state, ownProps) => ({
  comments: _.filter(state.comments, comment => {
    return comment.parentId === ownProps.postId
  }),
});

export default connect(mapStateToProps, { fetchComments, upVoteComment, downVoteComment })(ListComments);
