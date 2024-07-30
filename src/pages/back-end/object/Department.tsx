import {NetworkUtils} from "../utils/NetworkUtils.tsx";

export class Department {
    name: string;
    count: number;
    blockSize: number;
    defaultGateway: string;
    networkAddress: string;
    firstUsableIp: string;
    lastUsableIp: string;
    broadcastAddress: string;
    subnetMask: string;

    constructor(name: string, count: number) {
        this.name = name;
        this.count = count;
        this.blockSize = this.calculateBlockSize(count);
        this.defaultGateway = '';
        this.networkAddress = '';
        this.firstUsableIp = '';
        this.lastUsableIp = '';
        this.broadcastAddress = '';
        this.subnetMask = '';
    }

    calculateBlockSize(userCount: number): number {
        const totalHosts = userCount + 2; // Add 2 for network and broadcast addresses
        let blockSize = 1;
        while (blockSize < totalHosts) {
            blockSize *= 2;
        }
        return blockSize;
    }

    setNetworkInfo(networkAddress: string): void {
        const networkInfo = NetworkUtils.calculateSubnetInfo(networkAddress, this.blockSize);
        this.networkAddress = networkInfo.networkAddress;
        this.subnetMask = networkInfo.subnetMask;
        this.firstUsableIp = networkInfo.firstUsableIp;
        this.lastUsableIp = networkInfo.lastUsableIp;
        this.broadcastAddress = networkInfo.broadcastAddress;
        this.defaultGateway = networkInfo.firstUsableIp;
    }
}
