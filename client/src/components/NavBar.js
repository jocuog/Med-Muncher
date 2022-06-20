import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ setPatient, patient, setDoctors, doctors }) => {

    let navigate = useNavigate();

    const logout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => {
            setPatient(null);
        });
            navigate("/");
    };

    return (

        <div  className='navbar' >
        <div class="nes-container is-rounded with-title">
        <div class='title'>Navigation</div>

            <Link class="nes-container is-rounded is-dark" style={{ padding: 15 }} to="/">|HOME|
        </Link>

        <Link class="nes-container is-rounded is-dark" style={{ padding: 15 }} to="/new_medication">|ADD NEW MEDICATION|
        </Link>

         <Link class="nes-container is-rounded is-dark" style={{ padding: 15 }} to="/add_Doctor">|ADD DOCTOR|
        </Link>
    
        <Link class="nes-container is-rounded is-dark" style={{ padding: 15 }} to="/edit-patient">|EDIT PROFILE|
        </Link>

        <button  style={{ margin: 15 }} class="nes-btn is-primary" type="button" onClick={logout}>LOGOUT</button>
        
        </div>

        </div>

    )

}

export default NavBar;