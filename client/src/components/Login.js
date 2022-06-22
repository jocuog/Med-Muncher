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
                    <p>Incorrect Login.</p>
                </div>
            </>
            )
        } else {
            return (
                <>
                    <div class="nes-balloon from-right is-dark">
                        <p >Sign In to your Account.</p>
                    </div>  
                </>
            )
        }
    }

    return (
        
        <div style={{ opacity: '.8'}} class='nes-container is-dark is-rounded with-title'>
        <div class='title'>Patient Login</div>
        <div className="login" >
        
            <div>
                <form onSubmit={onSubmit}>
    
                <div>
                    <label class='nes-field'>Username</label>
                    <br></br>
                    <input
                        style={{ borderRadius: '5px', backgroundColor: 'pink' }}
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
                    style={{ borderRadius: '5px', backgroundColor: 'pink'}}
                        type="password"
                        placeholder="Enter new password..."
                        id="exampleEmailInput"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    style={{ marginTop: '20px'}}
                    class="nes-btn is-primary"
                    type="submit"
                    >Login
                </button>
                
                </form>
            
            </div>
                <div>
                <div className="login-popup" >
                    {errorPopup()}
                </div>
            
                <img className='login-image' src="https://art.ngfiles.com/images/781000/781757_sketching1star_pac-man-looped.gif?f1547186404" alt="Error muncher" />
                </div>
            </div>
        </div>
    );

}

export default Login