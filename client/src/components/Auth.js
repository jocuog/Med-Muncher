
import React, { useState } from "react";

const Auth = ({ setPatient }) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [displayError, setDisplayError] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        const patient = {
            name,
            username,
            password,
            points: 0,
            level: 1
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
                    console.log(patient)
                    res.json().then((json) => setErrors(json.errors));
                    setDisplayError(true)
            }
        });
    }

    const errorPopup = () => {
        if (displayError) {
            return (
            <>
                <div class="nes-balloon from-left is-dark">
                    <p>Please enter valid data in all fields.</p>
                </div>
            </>
            )
        } else {
            return (
                <>
                    <div class="nes-balloon from-left is-dark">
                        <p >Create a new Account.</p>
                    </div>  
                </>
            )
        }
    }

    return (
        <div>
            <div style={{ opacity: '.8'}} class='nes-container is-dark is-rounded with-title'>
                    <div class='title' >Create account</div>
                        <div>
                            <form onSubmit={onSubmit}>
                            <div class='nes-field'>
                                <label>Name </label>
                                
                                <input
                                    style={{ borderRadius: '5px', backgroundColor: 'pink' }}
                                    type="text"
                                    placeholder="Enter Name..."
                                    id="exampleEmailInput"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <br></br>

                            <div class='nes-field'>
                                <label>Username </label>
                                
                                <input
                                    style={{ borderRadius: '5px', backgroundColor: 'pink' }}
                                    type="text"
                                    placeholder="Enter username..."
                                    id="exampleEmailInput"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                                <br></br>

                            <div class='nes-field'>
                                <label>Password </label>
                                <input
                                    style={{ borderRadius: '5px', backgroundColor: 'pink' }}
                                    type="password"
                                    placeholder="Enter password..."
                                    id="exampleEmailInput"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                                    <br></br>

                                <button
                                    class="nes-btn is-primary"
                                    type="submit"
                                    >Sign Up
                                </button>
                            </form>
                            </div>
                <div>
                    <div className="auth-popup" >
                        {errorPopup()}
                    </div>
                        <img className='auth-image' src="https://pbs.twimg.com/profile_images/1111692640/number_400x400.png" alt="Error muncher" />
                </div>
            </div>
        </div>
    );
    };

export default Auth;