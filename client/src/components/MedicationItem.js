import { useState, useEffect } from "react";
const MedicationItem = ({ medications }) => {
    const { name, dosage, frequency, instructions, initial_amount, fill_date, refill_date, refills, refills_remaining, taken} = medications
    // const [value, onChange] = useState("");
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   action(value);
    // };
    return (
        <div>
            <h3>Med name:{name}</h3>
            <h3>Med dosage:{dosage}</h3>
            <h3>Med frequency:{frequency}</h3>
            <h3>Med instructions:{instructions}</h3>
            <h3>Med initial_amount:{initial_amount}</h3>
            <h3>Med refills:{refills}</h3>
            <h3>Med refills_remaining:{refills_remaining}</h3>
            <h3>Med fill date:{fill_date}</h3>
            <h3>Med refill date:{refill_date}</h3>
            <h3>Med refills left:{refills}</h3>
            <h3>Med taken:{taken}</h3>
            <br></br>
        </div>
    )
}

export default MedicationItem