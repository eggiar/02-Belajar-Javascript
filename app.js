if (1 + 1 === 2) {
  console.log("Math still works Dude");
}

let angkaRand = Math.floor(Math.random() * 10);

if (angkaRand > 5) {
  console.log(`Angka lebih dari 5 angkanya adalah ${angkaRand}`);
}

//let password = prompt('Masukkan password: ');

// if(password.length  >= 6 && password.indexOf(' ') === -1){
//     console.log('Password valid');
// } else {
//     console.log('Password tidak valid');
// }

let warna = [
  "merah",
  "kuning",
  "hijau",
  "biru",
  "jingga",
  "ungu",
  "hitam",
  "putih",
  "abu-abu",
  "coklat",
  "pink",
];

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Concat = menggabungkan Array
console.log(warna.concat(angka));

//Indexof = mencari index dari sebuah array
console.log(warna.indexOf("biru"));

//Contoh mencari data ada atau tidak pada array dengan IndexOf
//let cariWarna = prompt('Masukkan warna yang dicari: ');
// if(warna.indexOf(cariWarna) === -1){
//     console.log('Data tidak ada');
// } else {
//     console.log('Data ada, berada pada index ke: ' + warna.indexOf(cariWarna));ungu
// }

//mengurutkan data
warna.sort();
for (let i = 0; i <= warna.length; i++) {
  console.log(warna[i]);
}

//Untuk menambah atau replace array
angka.splice(1, 0, 1.5);
console.log(angka);

//Menghapus data array
console.log(angka.slice(2));

//Membalik urutan array
console.log(angka.reverse());

//Menggabungkan Array
console.log(angka.join("/"));

//Mengubah Const dengan array
const bilGanjil = [1, 3, 5, 7, 9];
bilGanjil.push(11);
console.log(bilGanjil);

//Array multidimensi
const barisanAngka = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

console.log(barisanAngka[0][4]);

//Object pada Javascript
const biodataUser = {
  nama: "Eggi Aunur R",
  umur: 26,
  alamat: "Lumbang",
  kesukaan: {
    barang: "HP",
    makanan: {
      pedas: "Ciki",
      manis: "Es Krim",
      asin: "Cilok",
      makananRandom: ["Bakso", "Mi Ayam", "Sempol"],
    },
  },
  TempatLahir: "Pasuruan",
};

console.clear();
console.log(
  `Halo nama saya adalah ${biodataUser.nama} alamat saya ${biodataUser.alamat} saya suka ${biodataUser.kesukaan.makanan.makananRandom[1]}`
);

//Ubah data
biodataUser.umur = 50;
console.log(`Umur setelah diubah ${biodataUser.umur}`);

//Menambah Data
biodataUser.kendaraan = "Motor Bebek";
console.log(biodataUser.kendaraan);

//Array yang terbentuk dari Object
const spekHP = [
  {
    nama: "Xiaomi",
    ram: "512 MB",
    internal: "16 GB",
  },
  {
    nama: "Nokia",
    ram: "1 GB",
    internal: "32 GB",
  },
  {
    nama: "Infinix",
    ram: "8 GB",
    internal: "128 GB",
  },
];

console.log(
  `Merek Hp : ${spekHP[2].nama}, RAM ${spekHP[2].ram}, Internal ${spekHP[2].internal}`
);

//Perulangan FOR
let baris = 100;
console.clear();
for (let i = 1; i <= baris; i++) {
  console.log(
    " ".repeat(baris - i) +
      "#".repeat(i) +
      "#".repeat(i) +
      " ".repeat(baris - i)
  );
}

//Nested Loop
console.clear();
for (let index = 0; index < spekHP.length; index++) {
  const element = spekHP[index];
  console.log(`Merek hp : ${element.nama}`);
  for (let j = 0; j < 1; j++) {
    console.log(`   RAM ${element.ram} Internal ${element.internal}`);
  }
}

//Perulangan While
// console.clear();
// let pass = 'pass';

// let guess = prompt('Masukkan password')
// while(pass !== guess){
//     guess = prompt("Masukkan password");
// }
// alert('Pasword benar')

console.clear();
//Pengulangan alternatif
for (let hp of spekHP) {
  console.log(hp.nama);
  console.log(`  ${hp.ram}`);
}

//Pengulangan objek
for (let hp in spekHP) {
  console.log(spekHP[hp].nama);
}

console.clear();
//Function
function buatAngka(min = 0, max = 10) {
  let temp = [];
  for (let i = min; i <= max; i++) {
    temp.push(i);
  }
  return temp;
}

function angkaAcak(max = 0) {
  return Math.floor(Math.random() * max);
}

function filterGanjil(angka) {
  let hasil = [];
  for (let a of angka) {
    if (a % 2 !== 0) {
      hasil.push(a);
    }
  }
  return hasil;
}

function filterGenap(angka) {
  let hasil = [];
  for (let a of angka) {
    if (a % 2 == 0) {
      hasil.push(a);
    }
  }
  return hasil;
}

function filterPrima(angka) {
  let hasil = [];
  for (let a of angka) {
    if (a <= 1) continue;
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      hasil.push(a);
    }
  }
  return hasil;
}

console.log(filterGenap(buatAngka(0, 10)));
console.log(filterGanjil(buatAngka(0, 10)));
console.log(filterPrima(buatAngka(0, 100)));

console.clear();

//Scope

let bahasa = "Js";

function bahasaPemrograman() {
  let bahasa = "Java";
  console.log(bahasa);
}

bahasaPemrograman();

//Function Expression, membuat variabel function yang bisa di panggil
let pangkatDua = function (angka) {
  return angka ** 2;
};

console.log(pangkatDua(6));

//Function sebagai argumen =
function panggilFuncDuaKali(func) {
  func();
  func();
}

function LemparDadu() {
  console.log(Math.floor(Math.random() * 6) + 1);
}

panggilFuncDuaKali(LemparDadu);

//Function me return Function = Higher Order Function

function halo(ucapan) {
  return function (nama) {
    console.log(`${ucapan} ${nama}`);
  };
}

const ucapan = halo("Selamat pagi");
ucapan("Eggi");

//Method di dalam objek = function yang ada di dalam objek
const PabrikMatematika = {
  jumlah: function (angka1, angka2) {
    return angka1 + angka2;
  },
  kurang: function (angka1, angka2) {
    return angka1 - angka2;
  },
  pangkat: function (basis, pangkat) {
    return basis ** pangkat;
  },
};

console.log(PabrikMatematika.pangkat(9, -2).toExponential());

//Keyword this = mengacu pada objek yang bersangkutan
const Lingkaran = {
  pi: Math.PI,
  luas: function (r) {
    return `Luas lingkaran dengan jari-jari ${r} adalah ${this.pi * r ** 2}`;
  },
  keliling: function (r) {
    return `Keliling lingkaran dengan jari-jari ${r} adalah ${2 * this.pi * r}`;
  },
};

console.log(Lingkaran.luas(28));
console.log(Lingkaran.keliling(28));

//try catch

function JadiHurufBesar(isiPesan) {
  try {
    console.log(isiPesan.toUpperCase());
  } catch (e) {
    console.log(
      `Terjadi error, masukkan hanya string. ${isiPesan} bukan string tetapi ${typeof isiPesan}`
    );
  }
}

JadiHurufBesar("Halo semua");
JadiHurufBesar(true);

//ForEach = melakukan sesuatu pada setiap elemen array
console.clear();
const buah = ["Apel", "Jeruk", "Mangga", "Anggur", "Pisang", "Durian"];
buah.forEach(function (buah) {
  console.log(buah);
});

const dataAnime = [
  {
    judul: "Naruto",
    genre: "Action",
    rating: 9.2,
  },
  {
    judul: "One Piece",
    genre: "Adventure",
    rating: 9.5,
  },
  {
    judul: "Bleach",
    genre: "Action",
    rating: 9.0,
  },
  {
    judul: "Attack on Titan",
    genre: "Action",
    rating: 9.7,
  },
];

dataAnime.forEach(function (Anime) {
  console.log(
    `Judul Anime: ${Anime.judul} \nGenre: ${Anime.genre} \nRating: ${Anime.rating}`
  );
});

//Map = mengembalikan array baru dari array yang sudah ada
console.clear();
const emosi = ["Senang", "Sedih", "Marah", "Kecewa", "Gembira", "Takut"];
const kapitalEmosi = emosi.map(function (e) {
  return e.toUpperCase();
});
console.log(kapitalEmosi);

//Arrow Function = function yang lebih ringkas
const akar = (angka) => {
  return Math.sqrt(angka);
};

console.log(akar(16));

//Return secara implisit = tidak perlu menggunakan return
const akar2 = (angka) => Math.sqrt(angka);
const random2 = () => Math.floor(Math.random() * 10);

//setTimeout = menjalankan function setelah waktu tertentu dan setInterval = menjalankan function secara berulang
console.clear();
// setTimeout(() => {
//   console.log("Waktu habis");
// }, 3000);

// setTimeout(() => {
//   console.log("Halo");
// }, 2000);

// let detik = 0;
// let menit = 0;
// const interval = setInterval(() => {
//   console.clear();
//   console.log(`${menit} : ${detik}`);
//   detik++;
//   if (detik === 60) {
//     menit++;
//     detik = 0;
//   }
// }, 1000);

//Memilih data tertentu dalam Array menggunakan filter
const angka2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const genap = angka2.filter((a) => {
  return a % 2 === 0;
});

console.log(genap);

const filmAction = dataAnime
  .filter((film) => {
    return film.genre === "Action";
  })
  .map((film) => {
    return film.judul;
  });

console.log(filmAction);

//Every = mengecek apakah semua elemen array memenuhi kondisi
const nilaiUjian = [80, 90, 100, 70, 60, 50];
const lulusSemua = nilaiUjian.every((nilai) => {
  return nilai >= 70;
}); //menghasilkan false karena ada nilai dibawah 70

//Some = mengecek apakah ada elemen array yang memenuhi kondisi
const lulusSatu = nilaiUjian.some((nilai) => {
  return nilai >= 70;
}); //menghasilkan true karena ada nilai diatas 70

//Reduce = mengurangi array menjadi satu nilai
const subtotal = [100, 200, 300, 400, 500];
const total = subtotal.reduce((acc, cur) => {
  return acc + cur;
});

//const total2 = subtotal.reduce()
console.log(total);

//this pada arrow function
const mobil = {
  merk: "Toyota",
  tahun: 2020,
  warna: "Hitam",
  info: () => {
    console.log(
      `Mobil ${this.merk} tahun ${this.tahun} berwarna ${this.warna}`
    );
  },
};
mobil.info(); //undefined karena this tidak mengacu pada objek mobil

//Mengatur Default value pada parameter function
function tambah(angka1, angka2 = 0) {
  return angka1 + angka2;
}
console.log(tambah(5, 10)); //15
console.log(tambah(5)); //5 karena angka2 defaultnya 0

//Spread Operator = menggabungkan array atau objek
const angka3 = [1, 2, 3, 4, 5];
const angka4 = [6, 7, 8, 9, 10];
const gabung = [...angka3, ...angka4];
console.log(gabung); //menghasilkan array gabungan dari angka3 dan angka4
Math.max(...gabung); //menghasilkan angka terbesar dari gabungan array

let nama = ["Eggi", "Aunur", "R"];
console.log(...gabung); //menghasilkan angka dari array gabungan
console.log(...nama);

//Merge object dengan spread
const orang = {
  nama: "Eggi",
  umur: 26,
};
const orang2 = {
  alamat: "Pasuruan",
  pekerjaan: "Programmer",
};
const orangGabung = { ...orang, ...orang2 };
console.log(orangGabung); //menghasilkan gabungan dari orang dan orang2

//rest param 
//Contoh dengan arrow function

const jumlahSemua = (...angka) => {
  return angka.reduce((total, elemen) => total+elemen)
};

//destructing, store elemen ke masing2 variabel
let namaku = ["Eggi",'Aunur','Rofiq', "Nama Lain 1",'Nama Lain2']
const [namaDepan, namaTengah, namaBelakang, ...namaLain] = namaku;

//bongkar properti objek ke masing-masing variabel
const biodataDestruct = {
  namades : 'Eggi',
  umurdes : 26,
  alamatdes : 'Pasuruan',
}

const {namades, umurdes, alamatdes} = biodataDestruct;
//mengubah alias
const {namades:namaku1, umurdes:umurku1, alamatdes:alamatku1} = biodataDestruct;
