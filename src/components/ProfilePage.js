import React from 'react'
import UserBox from './UserBox'
import Container from './Container'

const ProfilePage = (props) => {
    const { mode } = props;
    return (
        <div>
            <UserBox mode={mode} />
            <Container mode={mode} />
        </div>
    )
}

export default ProfilePage
