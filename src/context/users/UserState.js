import React, { useState } from 'react'
import UserContext from './UserContext';

const UserState = (props) => {
    const host = "https://profile-page-backend.onrender.com";

    const [user, setUser] = useState({});

    //Signup
    const addUser = async (firstname, lastname, email, phone, password) => {

        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ firstname, lastname, email, phone, password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem("token", json.authtoken);
            props.showAlert("Signed up successfully", "success");
        }
        else {
            alert("A user with this email alredy exists!")
        }
    }

    //Login
    const login = async (email, password) => {
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ email, password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem("token", json.authtoken);

        }
        else {

        }
    }

    //Updating user details
    const editUser = async (firstname, lastname, email, phone, id) => {
        //API call
        const response = await fetch(`${host}/api/auth/updateuser/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMWIzYTA4YWExMjc4MzFiZmEzODE5In0sImlhdCI6MTY4MDk3ODg0OX0.mSx23CL4x4HcADzlgC0NfIqOk47WNF17ZWIV1BR-k3E"
            },
            body: JSON.stringify({ firstname: firstname, lastname: lastname, email: email, phone: phone })
        });
        const json = await response.json();
        console.log(json);

        let newUser = JSON.parse(JSON.stringify(user));

        newUser.firstname = firstname
        newUser.lastname = lastname
        newUser.email = email
        newUser.phone = phone

        setUser(newUser);

    }
    const updatePassword = async (cpassword, npassword, cnpassword, id) => {
        //API call
        const response = await fetch(`${host}/api/auth/updatepassword/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMWIzYTA4YWExMjc4MzFiZmEzODE5In0sImlhdCI6MTY4MDk3ODg0OX0.mSx23CL4x4HcADzlgC0NfIqOk47WNF17ZWIV1BR-k3E"
            },
            body: JSON.stringify({ cpassword: cnpassword, npassword: npassword, cnpassword: cnpassword })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            alert("Password updated successfully");
        }
        else {

        }
    }

    return (
        <div>
            <UserContext.Provider value={{ user, editUser, updatePassword }}>
                {props.children}
            </UserContext.Provider>
        </div>
    )
}

export default UserState
