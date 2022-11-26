import React from 'react';

function Main({ Post, CommentCard }) {
  return (
    <main className='container'>

      {/* Post Section */}
      <Post CommentCard={CommentCard} />
      <Post CommentCard={CommentCard} />
      <Post CommentCard={CommentCard} />

    </main>
  )
}

export default Main