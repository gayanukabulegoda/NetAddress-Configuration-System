import { NetworkUtils } from "./utils/NetworkUtils.tsx";
import { Department } from "./object/Department.tsx";

// Array of departments
let departmentsArray: Department[] = [];

// Set data function
const calculate = (arr: Department[]): Department[] => {
    departmentsArray = arr;

    // Calculate the total number of users
    const totalUserCount: number = departmentsArray.reduce((sum, dept) => sum + dept.count, 0);

    // Select IP class based on total user count
    selectIpClass(totalUserCount);

    // Allocate subnets to departments
    allocateSubnets(departmentsArray, baseNetworkAddress);

    // Get data and print to console
    const departmentData = getData();

    return departmentData;
}

// Base network address and IP class
let baseNetworkAddress: string = "";
const classNetworkAddresses: Record<string, string> = {
    A: "10.0.0.0",
    B: "172.16.0.0",
    C: "192.168.0.0"
};

// Select IP class based on total user count
const selectIpClass = (count: number): void => {
    if (count <= 254) {
        baseNetworkAddress = classNetworkAddresses.C;
    } else if (count <= 65534) {
        baseNetworkAddress = classNetworkAddresses.B;
    } else if (count <= 16777214) {
        baseNetworkAddress = classNetworkAddresses.A;
    } else {
        throw new Error("Total user count exceeds the address space available.");
    }
};

// Allocate subnets to departments
const allocateSubnets = (departmentsArray: Department[], baseNetworkAddress: string): void => {
    departmentsArray.sort((a, b) => b.count - a.count); // Sort departments by descending user count

    let currentNetworkAddress: string = baseNetworkAddress;
    for (const department of departmentsArray) {
        department.setNetworkInfo(currentNetworkAddress);
        currentNetworkAddress = NetworkUtils.numberToIp(NetworkUtils.ipToNumber(currentNetworkAddress) + department.blockSize);
    }
}

// Get data function
const getData = (): Department[] => {
    return departmentsArray;
}

export { calculate, getData, allocateSubnets, selectIpClass };
