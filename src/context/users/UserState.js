import React, { useState } from 'react'

const UserState = () => {
    const host = "https://localhost:600";

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
                'auth-token': localStorage.getItem("token")
            },
            body: JSON.stringify({ firstname, lastname, email, phone })
        });
        const json = await response.json();
        console.log(json);

        let newContacts = JSON.parse(JSON.stringify(contacts));
        for (let index = 0; index < newContacts.length; index++) {
            let element = newContacts[index];
            if (element._id === id) {
                newContacts[index].name = name
                newContacts[index].mobile = mobile
                newContacts[index].email = email
                break;
            }
        }
        setContacts(newContacts);

    }

    return (
        <div>

        </div>
    )
}

export default UserState
