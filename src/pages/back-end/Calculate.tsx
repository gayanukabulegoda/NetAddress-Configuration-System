import { NetworkUtils } from "./utils/NetworkUtils.tsx";
import { Department } from "./object/Department.tsx";

// Array of departments
let departmentsArray: Department[] = [];

// Set data function
const setData = (arr: Department[]): void => {
    departmentsArray = arr;
}

// Calculate the total number of users
const totalUserCount: number = departmentsArray.reduce((sum, dept) => sum + dept.count, 0);

// Base network address and IP class
let baseNetworkAddress: string = "";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// let ipClass: string = "";
const classNetworkAddresses: Record<string, string> = {
    A: "10.0.0.0",
    B: "172.16.0.0",
    C: "192.168.0.0"
};
// Select IP class based on total user count
const selectIpClass = (count: number): void => {
    if (count <= 254) {
        // ipClass = "C";
        baseNetworkAddress = classNetworkAddresses.C;
    } else if (count <= 65534) {
        // ipClass = "B";
        baseNetworkAddress = classNetworkAddresses.B;
    } else if (count <= 16777214) {
        // ipClass = "A";
        baseNetworkAddress = classNetworkAddresses.A;
    } else {
        throw new Error("Total user count exceeds the address space available.");
    }
};

// Determine the appropriate IP class
selectIpClass(totalUserCount);

// Allocate subnets to departments
const allocateSubnets = (departmentsArray: Department[], baseNetworkAddress: string): void => {
    departmentsArray.sort((a, b) => b.count - a.count); // Sort departments by descending user count

    let currentNetworkAddress: string = baseNetworkAddress;
    for (const department of departmentsArray) {
        department.setNetworkInfo(currentNetworkAddress);
        currentNetworkAddress = NetworkUtils.numberToIp(NetworkUtils.ipToNumber(currentNetworkAddress) + department.blockSize);
    }
}

allocateSubnets(departmentsArray, baseNetworkAddress);

// Get data function
const getData = (): Array<Record<string, string | number>> => {
    const departmentData: Array<Record<string, string | number>> = [];

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
        });
    });

    return departmentData;
}

export { setData, getData, allocateSubnets, selectIpClass };
