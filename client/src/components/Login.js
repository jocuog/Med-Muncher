import React, { useState } from "react";

const Login = ({setPatient}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function onSubmit(e) {
        e.preventDefault();
        const patient = {
            username,
            password,
        };
    
        fetch("/login", {
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
                <h2>Patient Login</h2>
            </div>
            <div>
                <form onSubmit={onSubmit}>
                {/* <div>
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter new Name..."
                        id="exampleEmailInput"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div> */}
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter new username..."
                        id="exampleEmailInput"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password </label>
                    <input
                        type="password"
                        placeholder="Enter new password..."
                        id="exampleEmailInput"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="button-primary"
                    type="submit"
                    >Login
                </button>
                </form>
            </div>
            </div>
        </div>
    );

}

export default Login