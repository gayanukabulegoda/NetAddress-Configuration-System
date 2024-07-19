export class NetworkUtils {
    static ipToNumber(ip) {
        return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0);
    }

    static numberToIp(number) {
        return [(number >> 24) & 255, (number >> 16) & 255, (number >> 8) & 255, number & 255].join('.');
    }

    static getSubnetMask(blockSize) {
        let maskBits = 32 - Math.log2(blockSize);
        return this.numberToIp(-1 << (32 - maskBits));
    }

    static calculateSubnetInfo(networkAddress, blockSize) {
        let networkNumber = this.ipToNumber(networkAddress);
        let subnetMask = this.getSubnetMask(blockSize);
        let firstUsableIp = this.numberToIp(networkNumber + 1);
        let lastUsableIp = this.numberToIp(networkNumber + blockSize - 2);
        let broadcastAddress = this.numberToIp(networkNumber + blockSize - 1);

        return {
            networkAddress,
            subnetMask,
            firstUsableIp,
            lastUsableIp,
            broadcastAddress
        };
    }
}