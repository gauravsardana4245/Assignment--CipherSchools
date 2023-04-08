import React from 'react'

const PasswordManager = () => {
    return (
        <div>
            <div className="mp-top-row">
                <div className="mp-left-header">PASSWORD & SECURITY</div>
                <div className="mp-right-header">Change</div>
            </div>
            <div className="password-manager">
                <div className="info-head">
                    Password
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input type="password" name="pass" id="pass" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordManager
