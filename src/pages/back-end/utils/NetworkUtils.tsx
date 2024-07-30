export class NetworkUtils {
    static ipToNumber(ip: string): number {
        return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0);
    }

    static numberToIp(number: number): string {
        return [(number >> 24) & 255, (number >> 16) & 255, (number >> 8) & 255, number & 255].join('.');
    }

    static getSubnetMask(blockSize: number): string {
        const maskBits = 32 - Math.log2(blockSize);
        return this.numberToIp(-1 << (32 - maskBits));
    }

    static calculateSubnetInfo(networkAddress: string, blockSize: number): {
        networkAddress: string;
        subnetMask: string;
        firstUsableIp: string;
        lastUsableIp: string;
        broadcastAddress: string;
    } {
        const networkNumber = this.ipToNumber(networkAddress);
        const subnetMask = this.getSubnetMask(blockSize);
        const firstUsableIp = this.numberToIp(networkNumber + 1);
        const lastUsableIp = this.numberToIp(networkNumber + blockSize - 2);
        const broadcastAddress = this.numberToIp(networkNumber + blockSize - 1);

        return {
            networkAddress,
            subnetMask,
            firstUsableIp,
            lastUsableIp,
            broadcastAddress
        };
    }
}
