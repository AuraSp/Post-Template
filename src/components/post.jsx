import React from 'react'

function Post() {
  return (
    <div className='post-card'>

      {/* POST SECTION */}
      <div className='post'>
        <div className='post-space'>

        </div>
        <div className='post-description'>
          <h4>Lorem ipsum dolor sit amet, consectetur</h4>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum dolor sit</span>
        </div>
      </div>

      {/* COMMENT SECTION */}
      <div className='comment'>
        <div className='comment-input'>
          <input
            type="text"
            value='Placeholder...'
            placeholder='Placeholder...' />
          <button
            type='button'>SUBMIT</button>
        </div>
        <div className='comment-space'>

        </div>
      </div>

    </div>
  )
}

export default Post