let max = prompt("Masukkan angka maksimal");

while(!max){
    max = prompt("Masukkan angka maksimal");
}

let angkaTebakanKomputer = parseInt(Math.random()*max);
console.log(angkaTebakanKomputer);
let tebakan = prompt("Tebak angkanya");
let banyakNebak = 1;

while (parseInt(tebakan) !== angkaTebakanKomputer) {
    if(tebakan>angkaTebakanKomputer){
        tebakan = prompt(`Angka Terlalu besar, tebak lagi. Tebakan ke ${banyakNebak}`);
        banyakNebak++;
    }
    else{
        tebakan = prompt(
          `Angka Terlalu kecil, tebak lagi. Tebakan ke ${banyakNebak}`
        );
        banyakNebak++;
    }
}

alert(`Selamat tebakan anda benar dengan ${banyakNebak} kali nebak`)