//C. Object
//Latihan 1 : Membuat object sederhana

const buku = {
  judul: "Javascript untuk Pemula",
  penulis: "Eggi Aunur Rofiq",
  tahunTerbit: 2024,
};

console.log(buku.penulis);

//Latihan 2 : Mengakses Properti dalam Objek
const mahasiswa = {
  nama: "Budi",
  umur: 20,
  jurusan: "Informatika",
};

console.log(
  `Nama: ${mahasiswa.nama}\nUmur: ${mahasiswa.umur}\nJurusan: ${mahasiswa.jurusan}`
);

//Latihan 3: Menambahkan dan Mengubah Properti Object
const mobil = {
  merk: "Toyota",
  warna: "Merah",
};

mobil.tahun = 2023;
mobil.warna = "Biru"
console.log(mobil);

//Latihan 4: Object dengan Method
let siswa = {
    nama: "Andi",
    kelas: "X IPA 3",
    salam: function(){
        return `Halo, nama saya ${this.nama} dari kelas ${this.kelas}`
    }
}

console.log(siswa.salam());

//Latihan 5: Object di dalam Array
const produk = [
  { nama: "Laptop", harga: 7000000 },
  { nama: "Mouse", harga: 200000 },
  { nama: "Keyboard", harga: 350000 },
];

let totalHarga = 0;
// for(let i = 0;i<produk.length;i++){
//     totalHarga += produk[i].harga;
// }

//Alternatif menggunakan reduce
totalHarga = produk.reduce((total, item)=> total+item.harga,0)
console.log(totalHarga);

//