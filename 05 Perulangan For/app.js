//Latihan 1: Menampilkan Bilangan Ganjil
let result = "";
for (let i = 0; i <= 50; i++) {
  if (!(i % 2 === 0)) {
    result += i + " ";
  }
}
console.log(result);

//Latihan 2: Menghitung Total Nilai dalam Array (For Loop)
const angka = [5, 10, 15, 20, 25];
let sumAngka = 0;
for (let index = 0; index < angka.length; index++) {
  sumAngka += angka[index];
}

console.log(`Total: ${sumAngka}`);

//Latihan 3: Tebak Angka
// let angkaTebakanSistem = Math.floor(Math.random() * 10);
// let angkaTebakanUser = prompt(
//   "Tebak Angkanya (1-10): " + `Contekan : ${angkaTebakanSistem}`
// );

// if (angkaTebakanSistem !== angkaTebakanUser) {
//   while (angkaTebakanSistem > angkaTebakanUser) {
//     angkaTebakanUser = prompt(
//       "Kekecilan: " + `Contekan : ${angkaTebakanSistem}`
//     );
//   }

//   while (angkaTebakanSistem < angkaTebakanUser) {
//     angkaTebakanUser = prompt(
//       "Kebesaran: " + `Contekan : ${angkaTebakanSistem}`
//     );
//   }

//   while (angkaTebakanSistem == angkaTebakanUser) {
//     console.log(`Tebakanmu benar, angkanya adalah ${angkaTebakanSistem}`);
//     break;
//   }
// }

//Latihan 4: Segitiga Bintang (Nested Loop)
let n = 5;

for (let i = 1; i <= n; i++) {
  let char = "";
  for (let j = n; j >= i; j--) {
    char += " ";
  }
  for (let j = 1; j <= i; j++) {
    char += "*";
  }
  for (let j = 1; j <= i; j++) {
    char += "*";
  }
  console.log(char);
}

//Latihan 5: Daftar Siswa (For In)
const siswa = {
  nama: "Andi",
  umur: 17,
  kelas: "XI IPA 1",
};
for (const key in siswa) {
  if (Object.prototype.hasOwnProperty.call(siswa, key)) {
    const element = siswa[key];
    console.log(element);
  }
}

//Latihan 6: Menampilkan Data Produk (For Of)
const produk = [
  { nama: "Laptop", harga: 7000000 },
  { nama: "Mouse", harga: 200000 },
  { nama: "Keyboard", harga: 350000 },
];

for (const element of produk) {
  console.log(`Nama Produk: ${element.nama}, Harga: ${element.harga}`);
}

//Latihan 7: Mencari Angka Tertinggi dan Terendah dalam Array
const DaftarAngka = [4, -99, 2,-1, 8, 1, 5, -2, 30, 0, 2];
let min = DaftarAngka[0];
let max = DaftarAngka[0];

for (let j = 1; j < DaftarAngka.length; j++) {
  if (max <= DaftarAngka[j]) {
    max = DaftarAngka[j];
  }
  if (min >= DaftarAngka[j]) {
    min = DaftarAngka[j];
  }
}

console.log(`Nilai Tertinggi : ${max}\nNilai Terendah: ${min}`);

//Latihan 8: Menghitung Jumlah Huruf dalam Kalimat (For Loop)
let kalimat = "Belajar JavaScript itu seru!";
let jumlahHuruf = 0;
for (let index = 0; index < kalimat.length; index++) {
    if(kalimat[index]!=" "){
        jumlahHuruf +=1;
    }
}

console.log(`Jumlah huruf : ${jumlahHuruf}`);

