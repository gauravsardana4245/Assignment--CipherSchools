import { useRef, useState, useContext } from "react"
import React from 'react'
import UserContext from '../context/users/UserContext';

const PasswordManager = (props) => {
    const context = useContext(UserContext);
    const { updatePassword } = context;
    const [password, setPassword] = useState({ id: "6431b3a08aa127831bfa3819", cPassword: "", nPassword: "", cnPassword: "" })
    const { mode } = props;
    const ref = useRef(null);
    const ref2 = useRef(null);

    const changeHandler = (e) => {
        setPassword({ ...password, [e.target.name]: e.target.value })
    }
    const submitHandler = () => {
        if (password.npassword !== password.cnpassword) {
            alert("Passwords do not match!");
        }
        else {
            updatePassword(password.cpassword, password.nPassword, password.cnPassword, password.id);
            alert(" Contact Updated Succesfully");
            ref2.current.click()
        }
    }
    return (
        <>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#updatePasswordModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="updatePasswordModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className={`modal-content bg-${mode === 'light' ? 'light' : 'dark'} text-${mode === 'light' ? 'dark' : 'light'}`} >


                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="fname" className="form-label">Current Password</label>
                                    <input type="password" className="form-control" id="cpassword" aria-describedby="emailHelp" name="cpassword" onChange={changeHandler} value={password.currentPassword} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="npassword" className="form-label">New Password</label>
                                    <input type="password" className="form-control" id="npassword" aria-describedby="emailHelp" name="npassword" onChange={changeHandler} value={password.newPassword} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cnpassword" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="cnpassword" aria-describedby="emailHelp" name="cnpassword" onChange={changeHandler} value={password.cnewPassword} />

                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={ref2} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={submitHandler} className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="mp-top-row">
                    <div className="mp-left-header">PASSWORD & SECURITY</div>
                    {/* <button> */}
                    <div onClick={() => { ref.current.click() }} className="mp-right-header">Change</div>
                    {/* </button> */}
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
        </>
    )
}

export default PasswordManager
