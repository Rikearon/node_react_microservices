import React from 'react';

export default function ({ postId, comments }) {
  const renderComments = comments.map((comment) => {
    let content;

    const { status } = comment;
    if (status === 'approved') {
      content = comment.content;
    }

    if (status === 'pending') {
      content = 'This comment is awaiting moderation';
    }

    if (status === 'rejected') {
      content = 'This comment has been rejected';
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderComments}</ul>;
}
