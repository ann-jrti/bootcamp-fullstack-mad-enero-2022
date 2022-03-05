import { homedir } from 'os';
import { readdir } from 'fs/promises';
import fs from 'fs';

const homePath = homedir();

const allCrap = await readdir(homePath);

const printIfFileOrDirectory = () => {
    console.log(`This is my list of items in my home directory:`);
    console.log(`-----------------------------------------`);
    allCrap.forEach(d => {
        const stats = fs.statSync(`${homePath}/${d}`);
        console.log(stats.isFile() ? `${d} is a file` : `${d} is a directory`);
    })
}

printIfFileOrDirectory();
