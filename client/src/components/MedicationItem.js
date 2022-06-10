import { useState, useEffect } from "react";

const MedicationItem = ({ medications }) => {
    const { name, dosage, frequency, instructions, count, fill_date, refill_date, refills, taken} = medications

    return (
        <div>
            <h3>{name}</h3>
            <h3>{dosage}</h3>
            <h3>{frequency}</h3>
            <h3>{instructions}</h3>
            <h3>{count}</h3>
            <h3>{fill_date}</h3>
            <h3>{refill_date}</h3>
            <h3>{refills}</h3>
            <h3>{taken}</h3>
        </div>
    )
}

export default MedicationItem