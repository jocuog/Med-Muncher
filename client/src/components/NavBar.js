import { Link, useNavigate } from "react-router-dom";
import NewMedication from "./NewMedication.js";

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


        <div class="nes-container is-dark with-title">
        <Link  style={{ padding: 10 }} to="/new_medication">|Add New Medication|
        </Link>
        <Link style={{ padding: 10 }} to="/add_Doctor">|Add Doctor|
        </Link>
        <Link style={{ padding: 10 }} to="/">|Home|
        </Link>
        <Link style={{ padding: 10 }} to="/edit-patient">|Edit Profile|
        </Link>
        <button class="nes-btn is-primary" type="button" onClick={logout}>logout</button>
        </div>

    )

}

export default NavBar;