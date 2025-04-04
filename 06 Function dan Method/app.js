//Latihan 1: Membuat Fungsi Sederhana
function sapaPengguna(nama) {
  return `Halo, ${nama}! Selamat datang.`;
}

console.log(sapaPengguna("Eggi"));

//Latihan 2: Menghitung Luas Persegi Panjang (Function dengan Parameter)
function hitungLuasPersegiPanjang(panjang, sisi) {
  return panjang * sisi;
}

console.log(hitungLuasPersegiPanjang(5, 10));

//Latihan 3: Menentukan Bilangan Ganjil atau Genap (Function dengan Return)
function cekGanjilGenap(angka) {
  if (angka % 2 == 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

console.log(cekGanjilGenap(7));

//Latihan 4: Menjumlahkan Semua Angka dalam Array (Function dan Loop)
function jumlahkanArray(arr = []) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }

  return sum;
}
console.log(jumlahkanArray([1, 2, 3, 4, 5, 20, 15, 13]));

//Latihan 5: Menentukan Angka Tertinggi dan Terendah (Function dengan Multiple Parameter)
function cariMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (max < arr[index]) {
      max = arr[index];
    }

    if (min > arr[index]) {
      min = arr[index];
    }
  }

  return [min, max];
}

console.log(cariMinMax([3, 1, 9, 4, 7]));

//Latihan 6: Menampilkan Data Mahasiswa (Function dan Object)
const mahasiswa = { nama: "Budi", umur: 21, jurusan: "Informatika" };
console.log(tampilkanMahasiswa(mahasiswa));

function tampilkanMahasiswa(obj = {}) {
  return `Nama: ${obj.nama}, Umur: ${obj.umur}, jurusan: ${obj.jurusan}`;
}

//Latihan 7: Function dalam Function (Higher Order Function)

function tambah(a, b) {
  return a + b;
}
function kali(a, b) {
  return a * b;
}

function operasiMatematika(angka1, angka2, operasi) {
  return operasi(angka1, angka2);
}

console.log(operasiMatematika(5, 3, tambah));
console.log(operasiMatematika(5, 3, kali));

//Latihan 8: Menggunakan Try & Catch untuk Menangani Error
function bagiDua(angka) {
  try {
    if (typeof angka !== "number" || isNaN(angka)) {
      return "Error: Input harus berupa angka!";
    }

    return angka / 2;
  } catch (error) {
    return error.error;
  }
}

console.log(bagiDua(10));
console.log(bagiDua("sepuluh"));

//Latihan 9: Menggunakan Keyword this dalam Method Object
const mobil = {
  merk: "Toyota",
  tahun: 2022,
  infoMobil: function () {
    return `Mobil ${this.merk}, Tahun ${this.tahun}`;
  },
};

console.log(mobil.infoMobil());

//Latihan 10: Rekursi Menghitung Faktorial
function faktorial(angka) {
  if (angka === 0) {
    return 1;
  }
  return angka * faktorial(angka - 1);
}

console.log(faktorial(3));
console.log(faktorial(5));
