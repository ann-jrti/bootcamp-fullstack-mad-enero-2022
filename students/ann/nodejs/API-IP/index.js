import fetch from 'node-fetch';
import { argv } from 'process';
import { readFile, writeFile, rm, mkdir, appendFile } from 'fs/promises';
import { writeFileSync } from 'fs';

const ipApi = 'http://ip-api.com/json/'


const response = await fetch(ipApi);
const data = await response.json();

await writeFile('./connection.json', '');

await appendFile('./connection.json', `[${JSON.stringify(data, null, 2)}]`)

const getAnswers = () => {
    console.log(`My ip is: ${data.query}`);
    console.log(`My ISP is: ${data.isp}`);
}

const rawData = await readFile('./connection.json', { encoding: 'utf-8' });
const ips = JSON.parse(rawData)


// getAnswers();
// const ips = ['172.217.168.163 31.13.83.36 104.244.42.65']
const params = argv.slice(2, argv.length);

params.map(async (ip) => {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    ips.push(data);
})

setTimeout(() => {
    writeFileSync('./connection.json', `${JSON.stringify(ips, null, 2)}`);
}, 2000)








