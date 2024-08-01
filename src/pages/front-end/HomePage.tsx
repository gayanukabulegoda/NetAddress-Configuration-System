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

    const handelRefresh = () =>{
        window.location.reload();
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
                <div className="refresh" onClick={handelRefresh}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" rx="20" fill="white"/>
                        <path
                            d="M27 13V17.1667M27 17.1667H22.8333M27 17.1667L24.5 14.9097C23.1731 13.7221 21.4209 13 19.5 13C15.3579 13 12 16.3579 12 20.5C12 24.6422 15.3579 28 19.5 28C23.0693 28 26.0563 25.5067 26.8142 22.1667"
                            stroke="#109DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
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
