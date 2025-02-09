import '../../css/DepartmentDetailViewPopup.css'
import {Department} from "../back-end/object/Department.tsx";

interface Props {
    data?: Department;
    handelCloseBtn: (data?: Department) => void;
}

const DepartmentDetailViewPopup = ({data, handelCloseBtn}: Props) => {
    function handleNavigate() {
        handelCloseBtn();
    }

    return(
        <div id="PopupCard">
            <div className="container">
                <div className="closeBtn" onClick={handleNavigate}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.8"/>
                        <path
                            d="M12.3056 26.2187C11.8981 26.6263 11.8981 27.2869 12.3056 27.6944C12.7131 28.1019 13.3738 28.1019 13.7813 27.6944L12.3056 26.2187ZM20.7378 20.7378C21.1453 20.3303 21.1453 19.6697 20.7378 19.2622C20.3303 18.8547 19.6697 18.8547 19.2622 19.2622L20.7378 20.7378ZM19.2622 19.2622C18.8547 19.6697 18.8547 20.3303 19.2622 20.7378C19.6697 21.1453 20.3303 21.1453 20.7378 20.7378L19.2622 19.2622ZM27.6944 13.7813C28.1019 13.3738 28.1019 12.7131 27.6944 12.3056C27.2869 11.8981 26.6263 11.8981 26.2187 12.3056L27.6944 13.7813ZM20.7378 19.2622C20.3303 18.8547 19.6697 18.8547 19.2622 19.2622C18.8547 19.6697 18.8547 20.3303 19.2622 20.7378L20.7378 19.2622ZM26.2187 27.6944C26.6263 28.1019 27.2869 28.1019 27.6944 27.6944C28.1019 27.2869 28.1019 26.6263 27.6944 26.2187L26.2187 27.6944ZM19.2622 20.7378C19.6697 21.1453 20.3303 21.1453 20.7378 20.7378C21.1453 20.3303 21.1453 19.6697 20.7378 19.2622L19.2622 20.7378ZM13.7813 12.3056C13.3738 11.8981 12.7131 11.8981 12.3056 12.3056C11.8981 12.7131 11.8981 13.3738 12.3056 13.7813L13.7813 12.3056ZM13.7813 27.6944L20.7378 20.7378L19.2622 19.2622L12.3056 26.2187L13.7813 27.6944ZM20.7378 20.7378L27.6944 13.7813L26.2187 12.3056L19.2622 19.2622L20.7378 20.7378ZM19.2622 20.7378L26.2187 27.6944L27.6944 26.2187L20.7378 19.2622L19.2622 20.7378ZM20.7378 19.2622L13.7813 12.3056L12.3056 13.7813L19.2622 20.7378L20.7378 19.2622Z"
                            fill="#109DFF"/>
                    </svg>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Department</th>
                        <th>{data?.name}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>No. of Users</th>
                        <th>{data?.count}</th>
                    </tr>
                    <tr>
                        <th>Block Size</th>
                        <th>{data?.blockSize}</th>
                    </tr>
                    <tr>
                        <th>Default Gateway</th>
                        <th>{data?.defaultGateway}</th>
                    </tr>
                    <tr>
                        <th>Network Address</th>
                        <th>{data?.networkAddress}</th>
                    </tr>
                    <tr>
                        <th>First Usable IP</th>
                        <th>{data?.firstUsableIp}</th>
                    </tr>
                    <tr>
                        <th>Last Usable IP</th>
                        <th>{data?.lastUsableIp}</th>
                    </tr>
                    <tr>
                        <th>Broadcast Address</th>
                        <th>{data?.broadcastAddress}</th>
                    </tr>
                    <tr>
                        <th>Subnet Mask</th>
                        <th>{data?.subnetMask}</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DepartmentDetailViewPopup;