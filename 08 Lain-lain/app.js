
//Latihan 1. Menggunakan Default Parameter dalam Function
function salam(nama = "Pengunjung") {
  console.log(`Halo ${nama}`);
}

salam("Eggi");
salam();

//Latihan 2. Menggunakan Spread Operator untuk Array dalam Function
function jumlahkan(...angka) {
  return angka.reduce((total, index) => total + index, 0);
}

console.log(jumlahkan(1, 2, 3, 4, 5)); // Output: 15
console.log(jumlahkan(10, 20, 30)); // Output: 60

//Latihan 3. Menggabungkan Dua Array dengan Spread Operator
let angka1 = [1, 2, 3];
let angka2 = [4, 5, 6];
let arrayGabungan = [...angka1, ...angka2];
console.log(arrayGabungan);

//Latihan 4. Menggabungkan Dua Object dengan Spread Operator
const dataSiswa1 = { nama: "Eggi", umur: 25 };
const dataSiswa2 = { kelas: "XII IPA", umur: 26 };

const dataSiswaGabungan = { ...dataSiswa1, ...dataSiswa2 };
console.log(dataSiswaGabungan);

//Latihan 5. Menggunakan Rest Parameter dalam Function
function rataRata(...data) {
  return data.reduce((total, nilai) => total + nilai) / data.length;
}

console.log(rataRata(10, 20, 30)); // Output: 20
console.log(rataRata(5, 15, 25, 35)); // Output: 20

//Latihan 6. Menggunakan Array Destructuring
const warna = ["Merah", "Biru", "Hijau"];
const [warna1, warna2] = warna;

console.log(warna1); // Output: Merah
console.log(warna2); // Output: Biru

//Latihan 7. Menggunakan Object Destructuring
const siswa = { nama: "Eggi", umur: 25, kelas: "XII IPA" };
const { nama, umur } = siswa;

console.log(nama); // Output: Eggi
console.log(umur); // Output: 25

//Latihan 8. Menggunakan Object Destructuring dalam Function
function tampilkanDataSiswa({ nama, umur }) {
  console.log(`Nama: ${nama}, Umur: ${umur}`);
}

const siswa2 = { nama: "Eggi", umur: 25, kelas: "XII IPA" };
tampilkanDataSiswa(siswa2);

//Latihann 9. Mini Project: Simpan Data Siswa dengan Default Parameter dan Destructuring
function buatSiswa(
  nama = "belum ada nama",
  umur = null,
  kelas = "belum ada kelas"
) {
  let dataSiswa = {
    nama1: nama,
    umur1: umur,
    kelas1: kelas,
  };
  return dataSiswa;
}

const { nama1, umur1, kelas1 } = buatSiswa("Eggi", 20, "XII IPA");
console.log(`Nama: ${nama1}, Umur: ${umur1}, Kelas: ${kelas1}`);


