//Latihan 4 Selesai
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//B. Latihan Javascript Logic Pembuat Keputusan

//Latihan 1: Cek Nilai Lulus
function CekNilai(nilai) {
  if (nilai >= 70) {
    return "Lulus";
  } else {
    return "Tidak Lulus";
  }
}

console.log(CekNilai(80)); // Output: "Lulus"
console.log(CekNilai(65)); // Output: "Tidak Lulus"

//Latihan 2: Cek keanggotaan
function CekKeanggotaan(usia) {
  if (usia >= 18) {
    return "Keanggotaan diterima";
  } else {
    return "Keanggotaan ditolak";
  }
}

console.log(CekKeanggotaan(20)); // Output: "Keanggotaan diterima"
console.log(CekKeanggotaan(15)); // Output: "Keanggotaan ditolak"

//Latihan 3 : Cek Angka Ganjil atau Genap
function CekGanjilGenap(number) {
  //   if (number % 2 == 0) {
  //     return "Angka Genap";
  //   } else {
  //     return "Angka Ganjil";
  //   }

  //Menggunakan operator tenary agar lebih ringkas
  return number % 2 === 0 ? "Angka Genap" : "Angka Ganjil";
}

console.log(CekGanjilGenap(4)); // Output: "Angka Genap"
console.log(CekGanjilGenap(7)); // Output: "Angka Ganjil"

//Latihan 4 : Pilih menu dengan Switch
function PilihMenu(menuNumber) {
  switch (menuNumber) {
    case 1:
      return "Nasi Goreng";
    case 2:
      return "Mie Ayam";
    default:
      return "Menu tidak tersedia";
  }
}

console.log(PilihMenu(1)); // Output: "Nasi Goreng"
console.log(PilihMenu(2)); // Output: "Mie Ayam"
console.log(PilihMenu(4)); // Output: "Menu tidak tersedia"

//Latihan 5 : Cek Login dengan Operator Logika
function CekLogin(
  username,
  password,
  usernameValid = "admin",
  passwordValid = "1234"
) {
  //   let usernameValid = "admin";
  //   let passwordValid = "1234";
  //   if (username === usernameValid && password === passwordValid) {
  //     return "Login berhasil";
  //   } else {
  //     return "Login gagal";
  //   }

  //alternatif
  return username === usernameValid && password === passwordValid
    ? "Login Berhasil"
    : "Login Gagal";
}

console.log(CekLogin("admin", "1234")); // Output: "Login Berhasil"
console.log(CekLogin("admin", "wrongpass")); // Output: "Login Gagal"

//Latihan 6: Cek Akses Berdasarkan Usia dengan Operator Logika
function CekAkses(age) {
  //   if (age >= 18 && age < 60) {
  //     return "Akses diberikan";
  //   } else {
  //     return "Akses ditolak";
  //   }

  //Alternatif
  return age >= 18 && age < 60 ? "Akses ditolak" : "Akses diterima";
}

console.log(CekAkses(25)); // Output: "Akses Diberikan"
console.log(CekAkses(17)); // Output: "Akses Ditolak"
console.log(CekAkses(65)); // Output: "Akses Ditolak"