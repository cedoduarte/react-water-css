import { useState } from "react";
import "./MainComponent.css";

const MainComponent = () => {
    const [selectEmployee, setSelectEmployee] = useState(false);
    const [employeeName, setEmployeeName] = useState("");
    const [employeeNumber, setEmployeeNumber] = useState(1);

    const handleChangeSelectEmployee = (event) => {
        setSelectEmployee(event.target.checked);
    }

    const handleChangeEmployeeName = (event) => {
        setEmployeeName(event.target.value);
    }

    const handleChangeEmployeeNumber = (event) => {
        setEmployeeNumber(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(selectEmployee);
        console.log(employeeName);
        console.log(employeeNumber);
    }

    return (
        <div className="container">
            <form className="form">
                <div>
                    <input type="checkbox" name="selectEmployeeLabel" onChange={handleChangeSelectEmployee} />
                    <span>Select employee</span>
                </div>               

                <label htmlFor="employeeName">Employee name</label>
                <input type="text" name="employeeName" onChange={handleChangeEmployeeName}/>

                <label htmlFor="employeeNumber">Employee number</label>
                <select value={1} name="employeeNumber" onChange={handleChangeEmployeeNumber}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default MainComponent;