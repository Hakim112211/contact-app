const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// membuat folder data jika belum ada
const dirpath = './data';
if (!fs.existsSync(dirpath)) {
  fs.mkdirSync(dirpath);
}

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const tulispertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject)=> {
rl.question(pertanyaan, (nama) => {
   resolve(nama);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
    const contact = { nama, email, noHP };
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log('terimakasih sudah memasukkan data.');
    rl.close();
};

module.exports = { tulispertanyaan, simpanContact}