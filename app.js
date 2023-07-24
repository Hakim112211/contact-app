const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
      nama: {
        describe: 'Nama Lengkap',
        demandOption: true,
        type: 'string',
      },
      alamat: {
        describe: 'Alamat',
        demandOption: true,
        type: 'string',
      },
      nohp: {
        describe: 'nohp',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.alamat, argv.nohp);
    },
}).demandCommand();

//menampilkan daftar semua nama & nohp contact
yargs.command({
  command: 'list',
  describe: 'menampilkan semua nama & nohp contact',
  handler() {
    contacts.listContact();
  },
})

//menampilkan detail sebuah kontak
yargs.command({
  command: 'detail',
  describe: 'menampilkan detail sebuah contact berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama Lengkap',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
})


//menghapus kontak
yargs.command({
  command: 'delete',
  describe: 'Menghapus sebuah contact berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama Lengkap',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  }
})


yargs.parse();