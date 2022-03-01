
import { readFile, writeFile, rm, mkdir } from 'fs/promises';
import { readFileSync, appendFile, unlink } from 'fs';

const rawData = await readFile('./data.json', { encoding: 'utf-8' });
const data = JSON.parse(rawData)
const bankList = data.list


const numberOfSpanishEntities = data.list.length;

const malagaCity = bankList.filter(bank => bank.city === 'MALAGA')

console.log(malagaCity);


malagaCity.forEach((city) => {
    console.log(city.bank, city.swift_code);
})

console.log(bankList.find((bank) => bank.city === 'HUELVA') || 'N/A');
