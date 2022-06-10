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
        <NewMedication patient={patient} doctors={doctors} />
        <button type="button" onClick={logout}>logout</button>
        </div>

    )

}

export default NavBar;