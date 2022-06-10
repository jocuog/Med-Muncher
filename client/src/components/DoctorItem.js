import { useState, useEffect } from "react";

const DoctorItem = ({ doctors }) => {
    const { name, location, phone, email } =  doctors

    return (
        <div>
            <h3>{name}</h3>
            <h3>{location}</h3>
            <h3>{phone}</h3>
            <h3>{email}</h3>
        </div>
    )
}

export default DoctorItem