import React, { useState } from 'react'

const FollowersDisplay = async () => {
    const [followers, setFollowers] = useState([]);
    const host = "https://localhost:600";
    const response = await fetch(`${host}/api/contacts/fetchallfollowers`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem("token")
        }
    });
    const json = await response.json();
    setFollowers(json);
    return (
        <div>
            <h4>Users Following You</h4>
        </div>
    )
}

export default FollowersDisplay
