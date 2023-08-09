const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    //Gunaakan meethod trim untuk menghapus spasi di awal dan akhir kalimat 
    const kalimatTrimmed = kalimat.trim();
    console.log(`Kalimat setelah di-trim: ${kalimatTrimmed}`);
    rl.close();
});