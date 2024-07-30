import '../../css/Card.css';
import {Department} from "../back-end/object/Department.tsx";

interface Props {
    data?: Department;
    openPopup: (data?: Department) => void;
}

const Card = ({ data, openPopup }: Props) => {
    const handlePopup = () => {
        openPopup(data);
    }

    if (!data) {
        return null;  // Return null or a placeholder if data is not available
    }

    return (
        <div className="card">
            <h1>{data.name}</h1>
            <h1>{data.count}</h1>
            <h1>{data.firstUsableIp}</h1>
            <h1>{data.lastUsableIp}</h1>
            <h1>{data.subnetMask}</h1>
            <button onClick={handlePopup}>View</button>
        </div>
    )
}

export default Card;
