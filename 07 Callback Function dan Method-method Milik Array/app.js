//Latihan 1: Menggunakan forEach untuk Menampilkan Data
const buah = ["Apel", "Mangga", "Jeruk", "Pisang"];
buah.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});

//Latihan 2. Menggunakan map untuk Mengubah Data dalam Array
const angka = [1, 2, 3, 4, 5];
let hasilKuadrat = angka.map((num) => num ** 2);
console.log(hasilKuadrat);

//Latihan 3. Menggunakan filter untuk Menyaring Data
let angkaGenap = angka.filter((num) => num % 2 == 0);
console.log(angkaGenap);

//Latihan 4. Menggunakan reduce untuk Menjumlahkan Nilai dalam Array
let total = angka.reduce((total, num) => total + num, 0);
console.log(total);

//Latihan 5. Menggunakan some dan every untuk Memeriksa Kondisi dalam Array
const nilaiSiswa = [75, 80, 95, 65, 70];

//some untuk memeriksa apakah setidaknya satu elemen dalam array memenuhi kondisi, return true jika memenuhu
let apakahAdaYangDibawah50 = nilaiSiswa.some((num) => num < 50);
//every untuk memeriksa apakah semua elemen dalam array memenuhi kondisi (true), dan false jika salah satu tidak memenuhi

let apakahSemuaSiswaLulus = nilaiSiswa.every((num) => num > 60);

console.log(
  `Apakah ada yang dibawah 50 : ${apakahAdaYangDibawah50}\nApakah semua siswa lulus: ${apakahSemuaSiswaLulus}`
);

//Latihan 6. Menggunakan setTimeout untuk Menjalankan Fungsi Setelah Delay
setTimeout(() => console.log("Hallo Dunia!"), 3000);

//Latihan 7. Menggunakan setInterval untuk Menjalankan Fungsi Berulang
let count = 1;

setInterval(() => {
  if (count <= 5) {
    console.log(count);
    count += 1;
  }
}, 1000);

//Latihan 8. Menggunakan Arrow Function dengan Return Implisit
const jumlah = (a, b = 0) => a + b;
console.log(jumlah(3, 7));

//Latihan 9. Menggunakan this dalam Arrow Function
const user = {
  nama: "Eggi",
  perkenalan: function () {
    console.log(`Halo, nama saya ${this.nama}`);
  },
};

user.perkenalan();

//Latihan 10. Mini Project: Sistem Filter Produk dengan Harga
const produk = [
  { nama: "Laptop", harga: 7000000 },
  { nama: "Mouse", harga: 150000 },
  { nama: "Keyboard", harga: 300000 },
  { nama: "Monitor", harga: 1200000 },
];

const produkDibawah500rb = produk.filter((barang) => barang.harga < 500000);
console.log(produkDibawah500rb);
produkDibawah500rb.forEach((barang) => console.log(barang.nama));
