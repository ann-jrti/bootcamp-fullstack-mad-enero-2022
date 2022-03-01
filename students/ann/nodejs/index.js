import os, { version, arch, cpus, freemem, homedir, networkInterfaces } from 'os';
import { cwd, pid, ppid, argv } from 'process';
import { promises } from 'dns'


argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})
const dns = argv[2]

const options = {
    family: 0,
    all: true
}
promises.lookup(dns, options).then(ip => console.log(ip))


console.log(`Current Process PID: ${pid}`);
console.log(`Current Parent Process PID: ${ppid}`);
console.log(`Version: ${version}
Arch: ${arch}
Number of CPU's: ${cpus}
Free memory: ${freemem}
Home directory: ${homedir}`)

const interfaces = networkInterfaces()

Object.entries(interfaces).forEach(([interfaceName, interfaceIPs]) => {
    console.log('------------------------------');
    console.log('Interface name:', interfaceName);
    const ipv4 = interfaceIPs.find(({ family }) => family === 'IPv4')
    const ipv6 = interfaceIPs.find(({ family }) => family === 'IPv6')

    console.log(`IPv4: ${ipv4 ? ipv4.address : 'N/A'}`);
    console.log(`IPv6: ${ipv6 ? ipv6.address : 'N/A'}`);

})
