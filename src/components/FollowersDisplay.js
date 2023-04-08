import React, { useState } from 'react'
import FollowerItem from './FollowerItem';

const FollowersDisplay = async () => {
    // const [followers, setFollowers] = useState([]);
    // const host = "https://profile-page-backend.onrender.com";
    // const response = await fetch(`${host}/api/followers/fetchallfollowers`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMTk1MmQ4ZWNlZDMzOWZkYmNiNDBiIn0sImlhdCI6MTY4MDk3MTA1M30.FGEji9syHuGb6qVD4WCyf_qcmQw3wpv3FvftWaG5xB8"
    //     }
    // });
    // const json = await response.json();
    // setFollowers(json);
    return (
        <div>
            <h4>Users Following You</h4>
            {/* {followers.map((currentfollower) => {
                return <FollowerItem key={currentfollower._id} follower={currentfollower} />
            })} */}
        </div>
    )
}

export default FollowersDisplay
