import React, { useState } from 'react';

function Post({ CommentCard }) {

  // ARRAY FOR COMMENTS BOX
  let commentArr = [
    {
      user: 'Lorem ipsum',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
    },
    {
      user: 'Lorem ipsum',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
    },
    {
      user: 'Lorem ipsum',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
    },
    {
      user: 'Lorem ipsum',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
    },
    {
      user: 'Lorem ipsum',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
    },
  ]

  let [userComment, setUserComment] = useState('');
  
  // FUNCTION FOR LEAVING THE COMMENT (NO LIVE ADDING)
  function leaveComment(e) {
    e.preventDefault();

    let tempObj = {
      user: 'Lorem ipsum',
      comment: userComment
    };
    commentArr.push(tempObj);
  }

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
        <div className='overflow'>

          {/* input section */}
          <div className='comment-input'>
            <input
              onChange={(e) => { setUserComment(e.target.value) }}
              type="text"
              maxLength={30}
              minLength={1}
              placeholder='Placeholder...' />
            <button
              type='button' onClick={(e) => { leaveComment(e) }}>SUBMIT</button>
          </div>

          {/* comments text section */}
          <div className='comment-space'>

            {commentArr.map((filteredData) => (
              <CommentCard
                data={filteredData} />
            ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Post