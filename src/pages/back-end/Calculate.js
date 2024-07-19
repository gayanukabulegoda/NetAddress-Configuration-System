// Total number of users across all departments
import {NetworkUtils} from "./utils/NetworkUtils.js";

let departmentsArray = [];

const setData = (arr) => {
    departmentsArray = arr;
}

// Calculate the total number of users
const totalUserCount = departmentsArray.reduce((sum, dept) => sum + dept.count, 0);

let baseNetworkAddress = "";
let ipClass = "";
let classNetworkAddresses = {
    A: "10.0.0.0",
    B: "172.16.0.0",
    C: "192.168.0.0"
};
let defaultClassMasks = {
    A: "255.0.0.0",
    B: "255.255.0.0",
    C: "255.255.255.0"
};

const selectIpClass = (count) => {
    if (count <= 254) {
        ipClass = "C";
        baseNetworkAddress = classNetworkAddresses.C;
    } else if (count <= 65534) {
        ipClass = "B";
        baseNetworkAddress = classNetworkAddresses.B;
    } else if (count <= 16777214) {
        ipClass = "A";
        baseNetworkAddress = classNetworkAddresses.A;
    } else {
        throw new Error("Total user count exceeds the address space available.");
    }
};

// Determine the appropriate IP class
selectIpClass(totalUserCount);

// Allocate subnets to departments
const allocateSubnets = (departmentsArray, baseNetworkAddress) => {
    departmentsArray.sort((a, b) => b.count - a.count); // Sort departments by descending user count

    let currentNetworkAddress = baseNetworkAddress;
    for (let department of departmentsArray) {
        department.setNetworkInfo(currentNetworkAddress);
        currentNetworkAddress = NetworkUtils.numberToIp(NetworkUtils.ipToNumber(currentNetworkAddress) + department.blockSize);
    }
}

allocateSubnets(departmentsArray, baseNetworkAddress);

const getData = () => {
    let departmentData = [];

    departmentsArray.forEach(department => {
        departmentData.push({
            name: department.name,
            userCount: department.count,
            blockSize: department.blockSize,
            defaultGateway: department.networkInfo.firstUsableIp,
            networkAddress: department.networkInfo.networkAddress,
            firstUsableIp: department.networkInfo.firstUsableIp,
            lastUsableIp: department.networkInfo.lastUsableIp,
            broadcastAddress: department.networkInfo.broadcastAddress,
            subnetMask: department.networkInfo.subnetMask
        })
    });

    return departmentData;
}


