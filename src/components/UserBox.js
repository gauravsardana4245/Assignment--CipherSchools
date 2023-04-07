import React from 'react'
import userImage from "../img/ppp.jpg";

const UserBox = () => {
    return (
        <div className='user-box'>
            <div className="user-profile-box">
                <div className="user-avatar">
                    <div className='user-image'>
                        <img src={userImage} alt="" />
                    </div>
                    <div className='user-profile-pencil'>
                        <i class="fa-solid fa-pencil"></i>
                    </div>
                </div>
            </div>
            <div className="user-details">
                <div className="user-detail-box">
                    <div className="user-left-side">
                        Hello, <br /> <b> Gaurav Sardana </b> <br />
                        gaurravsarrdana@gmail.com
                    </div>
                </div>
                <div className="user-right-side">
                    <div className="user-followers-count">
                        <span>0</span>
                        Followers
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBox
