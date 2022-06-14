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


        <div>
        <Link to="/new_medication">Add New Medication
        </Link>
        <Link to="/add_Doctor">Add Doctor
        </Link>
        <button type="button" onClick={logout}>logout</button>
        </div>

    )

}

export default NavBar;