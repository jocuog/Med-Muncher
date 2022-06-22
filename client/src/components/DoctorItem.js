
const DoctorItem = ({ doctors }) => {
    const { name, location, phone, email } =  doctors

    return (
        <div>
            <h3>Doc Name:{name}</h3>
            <h3>Doc Loc:{location}</h3>
            <h3>Doc Phone:{phone}</h3>
            <h3>Doc Email:{email}</h3>
        </div>
    )
}

export default DoctorItem