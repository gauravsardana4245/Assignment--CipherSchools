import React, { useRef, useContext, useState } from 'react';
import UserContext from '../context/users/UserContext';
import userImage from "../img/ppp.jpg";
import { Link } from 'react-router-dom';

const UserBox = (props) => {
    const context = useContext(UserContext);
    const { editUser } = context;
    const [details, setDetails] = useState({ id: "6431b3a08aa127831bfa3819", fname: "Gaurav", lname: "Sardana", email: "gaurravsarrdana@gmail.com", phone: "" });
    const { mode } = props;
    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const updateDetails = () => {
        ref.current.click();
    }
    const changeHandler = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    const submitHandler = () => {
        editUser(details.fname, details.lname, details.email, details.phone, details.id);
        alert(" Contact Updated Succesfully");
        ref2.current.click()
    }
    return (
        <div className='user-box'>

            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className={`modal-content bg-${mode === 'light' ? 'light' : 'dark'} text-${mode === 'light' ? 'dark' : 'light'}`} >
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Profile Update</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="edit-profile">
                            <div className="edit-profile-photo">
                                <div className="user-avatar">
                                    <div className='user-image'>
                                        <img src={userImage} alt="" />
                                    </div>
                                    <div className='user-profile-pencil'>

                                        <input className='d-none' ref={ref3} type="file" />
                                        <button onClick={() => { ref3.current.click(); }}>
                                            <i className="fa-solid fa-pencil"> </i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body">
                                <form className='my-3'>
                                    <div className="mb-3">
                                        <label htmlFor="fname" className="form-label">First Name</label>
                                        <input type="text" value={details.fname} className="form-control" id="fname" aria-describedby="emailHelp" name="fname" onChange={changeHandler} value={details.fname} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lname" className="form-label">Last Name</label>
                                        <input type="text" value={details.lname} className="form-control" id="lname" aria-describedby="emailHelp" name="lname" onChange={changeHandler} value={details.lname} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input type="email" value={details.email} className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={changeHandler} value={details.email} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Mobile Number</label>
                                        <input type="phone" value={details.phone} className="form-control" id="phone" aria-describedby="emailHelp" name="phone" onChange={changeHandler} value={details.phone} />

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={ref2} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={submitHandler} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="user-profile-box">
                <div className="user-avatar">
                    <div className='user-image'>
                        <img src={userImage} alt="" />
                    </div>
                    <div className='user-profile-pencil'>
                        <button onClick={updateDetails}>
                            <i className="fa-solid fa-pencil"></i>
                        </button>
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
                        <Link className='followersLink' to='/followers'>
                            <span>0</span>
                            Followers
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBox
