import React, { Fragment } from 'react'

function CommentCard({ data }) {

    return (
        <Fragment>
            <div className='icon-box'>
                <div className='img'></div>
            </div>
            <div className='comment-text'>
                <h4>{data.user}</h4>
                <p>{data.comment}</p>
            </div>
            <hr />
        </Fragment>
    )
}

export default CommentCard