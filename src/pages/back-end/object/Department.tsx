import { NetworkUtils } from "../utils/NetworkUtils.tsx";

export class Department {
    name: string;
    count: number;
    blockSize: number;
    networkInfo: Record<string, any>; // Adjust this type based on what NetworkUtils returns

    constructor(name: string, count: number) {
        this.name = name;
        this.count = count;
        this.blockSize = this.calculateBlockSize(count);
        this.networkInfo = {};
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
        this.networkInfo = NetworkUtils.calculateSubnetInfo(networkAddress, this.blockSize);
    }
}
