import React from 'react'

function Post() {
  return (
    <div className='post-card'>

      {/* POST SECTION */}
      <div className='post'>
        <div className='post-space'>

        </div>
        <div className='post-description'>
          <span>Lorem ipsum dolor sit amet, consectetur</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum dolor sit</span>
        </div>
      </div>

      {/* COMMENT SECTION */}
      <div className='comment'>
        <input
          type="text"
          placeholder='Placeholder...' />
        <button
          type='button'>submit</button>
        <div className='comment-space'>

        </div>
      </div>
      
    </div>
  )
}

export default Post