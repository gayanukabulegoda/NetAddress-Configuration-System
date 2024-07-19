import {NetworkUtils} from "../utils/NetworkUtils.js";

export class Department {
    constructor(name, count) {
        this.name = name;
        this.count = count;
        this.blockSize = this.calculateBlockSize(count);
        this.networkInfo = {};
    }

    calculateBlockSize(userCount) {
        let totalHosts = userCount + 2; // Add 2 for network and broadcast addresses
        let blockSize = 1;
        while (blockSize < totalHosts) {
            blockSize *= 2;
        }
        return blockSize;
    }

    setNetworkInfo(networkAddress) {
        this.networkInfo = NetworkUtils.calculateSubnetInfo(networkAddress, this.blockSize);
    }
}