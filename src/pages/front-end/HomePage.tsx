import '../../css/HomePage.css';
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import DepartmentDetailViewPopup from "./DepartmentDetailViewPopup.tsx";
import {useEffect, useState} from "react";
import { Department } from "../back-end/object/Department.tsx";
import { calculate } from "../back-end/Calculate.tsx";
import {setTableData} from "./table.tsx";

function HomePage() {
    const [departments, setDepartments] = useState<Department[]>([]);
    const [name, setName] = useState<string>('');
    const [count, setCount] = useState<number | string>('');
    const [showPopup, setShowPopup] = useState(false);
    const [data, setData] = useState<Department[]>([])
    const [popupData, setPopupData] = useState<Department>()

    const navigate = useNavigate();

    useEffect(() => {
        // Load data from localStorage if available
        const savedDepartments = localStorage.getItem('departments');
        const savedData = localStorage.getItem('data');

        if (savedDepartments) {
            setDepartments(JSON.parse(savedDepartments));
        }

        if (savedData) {
            setData(JSON.parse(savedData));
        }

        localStorage.removeItem('departments');
        localStorage.removeItem('data');
    }, []);

    const handleNavigate = () => {
        localStorage.setItem('departments', JSON.stringify(departments));
        localStorage.setItem('data', JSON.stringify(data));

        setTableData(departments)
        navigate("/ViewAllPage");
    }

    const handleShowPopup = (data?: Department) => {
        setPopupData(data);
        setShowPopup(!showPopup);
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
        setData(departmentData);
        console.log(departmentData);
    }

    return (
        <div id={"HomePage"}>
            <div className="backLayouts">
                <div></div>
                <div></div>
                <div></div>
            </div>

            {showPopup && <DepartmentDetailViewPopup handelCloseBtn={handleShowPopup} data={popupData}/>}
            <div className="content">
                <h1 className="title">NetAddress Configuration System</h1>
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
                                    <th>Users</th>
                                </tr>
                                </thead>
                                <tbody>
                                {departments.map(department => (
                                    <tr key={department.name}>
                                        <td>{department.name}</td>
                                        <td>{department.count}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <button onClick={handleProcess}>Process</button>
                    </div>
                    <div>
                        <div className="cardset">
                            {data.map(department => (
                                <Card key={department.name} data={department} openPopup={handleShowPopup} />
                            ))}
                        </div>
                        <div className={"viewAll"}>
                            <button onClick={handleNavigate}>View All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
