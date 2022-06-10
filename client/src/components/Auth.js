import React, { useState } from "react";

const Auth = ({ setPatient }) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function onSubmit(e) {
        e.preventDefault();
        const patient = {
            name,
            username,
            password,
        };

        fetch("/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(patient),
        }).then((res) => {
            if (res.ok) {
                res.json().then((patient) => {
                    setPatient(patient);
            });
                } else {
                    res.json().then((json) => setErrors(json.errors));
            }
        });
    }

    return (
            <div>
            <div className='login_card'>
                <div>
                    <h2>Create account</h2>
                </div>
                <div>
                    <form onSubmit={onSubmit}>
                    <div>
                        <label>Name </label>
                        <input
                            type="text"
                            placeholder="Enter Name..."
                            id="exampleEmailInput"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Username </label>
                        <input
                            type="text"
                            placeholder="Enter username..."
                            id="exampleEmailInput"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password </label>
                        <input
                            type="password"
                            placeholder="Enter password..."
                            id="exampleEmailInput"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="button-primary"
                        type="submit"
                        >Sign Up
                    </button>
                    </form>
                </div>
                </div>
            </div>
        );
    };

export default Auth;