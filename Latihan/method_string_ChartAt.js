const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//chartAt
rl.question("Masukkan sebuah kalimat: ", (inputString) => {
    rl.question("Massukkan index yang ingin kalian cek: ", (index) => {
        //konversi nilai index ke tipe number
        index = Number(index);

        //Periksa apakah index valid (berada dalam string)
        if (index >= 0 && index < inputString.length) {
            
        //Gunakan meethod ChartAt untuk mendapatkan karakter pada indeks yang diminta 
        const character = inputString.charAt(index);
        console.log(`Karakter pada index ${index}: ${character}`);
        } else {
            console.log("Index tidak valid!");
        }
        rl.close();
    });
});