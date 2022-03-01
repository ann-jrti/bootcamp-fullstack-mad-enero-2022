
import { readFile, writeFile, rm, mkdir } from 'fs/promises';
import { readFileSync, appendFile, unlink } from 'fs';


await writeFile('./hello.json', '');
const packageJSON = await readFile('./package.json', { encoding: 'utf-8' }); // lectura de un archivo
const parse = JSON.parse(packageJSON)
const packageName = parse.name

console.log(packageName);


console.log(parse);
const packageName = Object.entries(JSON.stringify(packageJSON, 2, null))
console.log(packageName);

await writeFile('./hello.json', '{"name":"hello-world-nodejs","version":"1.0.0"}');

await mkdir('my-first-folder')

appendFile('./hello.json', ', {"added text to JSON"}', (err) => {
    if (err) throw err;
    console.log('"added text to JSON" was append to file');
})


await rm('./hello.json')