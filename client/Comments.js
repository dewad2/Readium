import React from 'react';

export default function Comments(props) {
  const { comments } = props;
  console.log('COMMENTS', comments);
  return (
    <div id="comments">
      {comments &&
        comments.map(comment => (
          <div key={comment.id} className="comment row">
            <img src={comment.author.imageUrl} />
            <div className="column">
              <a>
                <h5>{comment.author.name}</h5>
              </a>
              <div>{comment.content}</div>
            </div>
          </div>
        ))}
    </div>
  );
}
