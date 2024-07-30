import '../../css/HomePage.css'
import Card from "./Card";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Department} from "../back-end/object/Department.tsx";
import {calculate} from "../back-end/Calculate.tsx";

function HomePage() {

    const [departments, setDepartments] = useState<Department[]>([]);
    const [name, setName] = useState<string>('');
    const [count, setCount] = useState<number | string>('');

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/ViewAllPage")
    }

    const handleAdd = () => {
        if (name.trim() !== '' && count !== '' && !isNaN(Number(count))) {
            const department = new Department(name, Number(count));
            setDepartments([...departments, department]);
            setName('');
            setCount('');
        }
    };

    const handleProcess = () => {
        const departmentData = calculate(departments);
        console.log(departmentData)
    }

    return (
        <div id={"HomePage"}>
            <div className="backLayouts">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="content">
                <h1 className="title">Netaddress Configuration System</h1>
                <div>
                    <div>
                        <div className="inputs">
                            <h2>Branch Name</h2>
                            <input type="text"/>
                            <div>
                                <div>
                                    <h2>Department Name</h2>
                                    <input type="text" value={name || ''} onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div>
                                    <h2>User Count</h2>
                                    <input type="number" value={count || ''} onChange={(e) => setCount(e.target.value)}/>
                                </div>
                                <button onClick={handleAdd}>Add</button>
                            </div>
                        </div>
                        <div className="table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Department</th>
                                    <th>Users.</th>
                                </tr>
                                </thead>
                                <div>
                                    <tbody>
                                    {departments &&
                                    departments.map(department => (
                                        <tr>
                                            <td>
                                                {department.name}
                                            </td>
                                            <td>
                                                {department.count}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </div>
                            </table>
                        </div>
                        <button onClick={handleProcess}>Process</button>
                    </div>
                    <div>
                        <div className="cardset">
                        <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                        <div className={"viewAll"}>
                            <button onClick={handleNavigate}>View All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage