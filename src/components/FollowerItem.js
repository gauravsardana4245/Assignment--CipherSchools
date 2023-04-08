import React from 'react'
import profilePicture from "../img/test.png"

const FollowerItem = (props) => {
    const { follower } = props;
    return (
        <div className='follower-item'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={profilePicture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{follower.name}</h5>
                    <p className="card-text">{follower.profession}</p>
                    <p className="card-text">{follower.followerscount} Followers</p>
                    <a href="/" className="btn btn-primary">Follow</a>
                </div>
            </div>
        </div>
    )
}

export default FollowerItem
