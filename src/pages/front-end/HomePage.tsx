import '../../css/HomePage.css'
import Card from "./Card";
import {useNavigate} from "react-router-dom";

function HomePage(){

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/ViewAllPage")
    }

    return(
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
                                    <input type="text"/>
                                </div>
                                <div>
                                    <h2>User Count</h2>
                                    <input type="text"/>
                                </div>
                                <button>Add</button>
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
                                    <tr>
                                        <td>
                                            Develop
                                        </td>
                                        <td>
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Develop
                                        </td>
                                        <td>
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Develop
                                        </td>
                                        <td>
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Develop
                                        </td>
                                        <td>
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Develop
                                        </td>
                                        <td>
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Develop
                                        </td>
                                        <td>
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Develop
                                        </td>
                                        <td>
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Develop
                                        </td>
                                        <td>
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Develop
                                        </td>
                                        <td>
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Develop
                                        </td>
                                        <td>
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Develop
                                        </td>
                                        <td>
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Develop
                                        </td>
                                        <td>
                                            10
                                        </td>
                                    </tr>
                                    </tbody>
                                </div>
                            </table>
                        </div>
                        <button>Process</button>
                    </div>
                    <div>
                        <div className="cardset">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <div className={"viewAll"}>
                            <button onClick={ handleNavigate }>View All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage