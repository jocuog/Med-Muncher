import React, { useState } from "react";

const Login = ({setPatient}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [displayError, setDisplayError] = useState(false);

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
                res.json().then((json) => 
                setErrors(json.errors));
                setDisplayError(true)
            }
        });
    }

    const errorPopup = () => {
        if (displayError) {
            return (
            <>
             <div class="nes-balloon from-right is-dark">
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
            </>
            )
        }
    }

    return (
        <div className="login" >
        <div style={{ backgroundColor: 'red'}} class='nes-container is-dark with-title'>
            {/* <div className="form"> */}
                <h2 class='title'>Patient Login</h2>
            {/* </div> */}
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
                    <label class='nes-field'>Username</label>
                    <br></br>
                    <input
                        type="text"
                        placeholder="Enter new username..."
                        id="exampleEmailInput"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br></br>
                <div>
                    <label class='nes-field'>Password </label>
                    <br></br>
                    <input
                        type="password"
                        placeholder="Enter new password..."
                        id="exampleEmailInput"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    class="nes-btn is-primary"
                    type="submit"
                    >Login
                </button>
                
                </form>
            
            </div>
                <img className='login-image' src="https://pbs.twimg.com/profile_images/1111692640/number_400x400.png" alt="Error muncher" />
            {errorPopup()}
            </div>
        </div>
    );

}

export default Login