if (1+1===2){
    console.log('Math still works Dude');
}

let angkaRand = Math.floor(Math.random()*10);

if (angkaRand > 5){
    console.log(`Angka lebih dari 5 angkanya adalah ${angkaRand}`);
}

//let password = prompt('Masukkan password: ');

// if(password.length  >= 6 && password.indexOf(' ') === -1){
//     console.log('Password valid');
// } else {
//     console.log('Password tidak valid');
// }

let warna = ["merah", "kuning", "hijau", "biru", "jingga", "ungu", "hitam", "putih", "abu-abu", "coklat", "pink"];

let angka = [1,2,3,4,5,6,7,8,9,10];

//Concat = menggabungkan Array
console.log(warna.concat(angka));

//Indexof = mencari index dari sebuah array
console.log(warna.indexOf('biru'));

//Contoh mencari data ada atau tidak pada array dengan IndexOf
//let cariWarna = prompt('Masukkan warna yang dicari: ');
// if(warna.indexOf(cariWarna) === -1){
//     console.log('Data tidak ada');
// } else {
//     console.log('Data ada, berada pada index ke: ' + warna.indexOf(cariWarna));ungu
// }

//mengurutkan data
warna.sort();
for(let i=0;i<=warna.length;i++){
    console.log(warna[i]);
}

//Untuk menambah atau replace array
angka.splice(1, 0, 1.5);
console.log(angka);

//Menghapus data array
console.log(angka.slice(2));

//Membalik urutan array
console.log(angka.reverse())

//Menggabungkan Array
console.log(angka.join('/'))

//Mengubah Const dengan array
const bilGanjil = [1,3,5,7,9];
bilGanjil.push(11)
console.log(bilGanjil)

//Array multidimensi
const barisanAngka = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]

console.log(barisanAngka[0][4])

//Object pada Javascript
const biodataUser = {
    nama        : 'Eggi Aunur R',
    umur        : 26,
    alamat      : 'Lumbang',
    kesukaan    :{
        barang  :'HP',
        makanan :{
            pedas : 'Ciki',
            manis : 'Es Krim',
            asin  : 'Cilok',
            makananRandom :['Bakso','Mi Ayam','Sempol']
        }
    },
    TempatLahir : 'Pasuruan'
}

console.clear();
console.log(`Halo nama saya adalah ${biodataUser.nama} alamat saya ${biodataUser.alamat} saya suka ${biodataUser.kesukaan.makanan.makananRandom[1]}`);

//Ubah data
biodataUser.umur=50
console.log(`Umur setelah diubah ${biodataUser.umur}`);

//Menambah Data
biodataUser.kendaraan = 'Motor Bebek'
console.log(biodataUser.kendaraan);

//Array yang terbentuk dari Object
const spekHP = [
    {
        nama    : 'Xiaomi',
        ram     : '512 MB',
        internal: '16 GB'
    },
    {
        nama    : 'Nokia',
        ram     : '1 GB',
        internal: '32 GB'
    },
    {
        nama    : 'Infinix',
        ram     : '8 GB',
        internal: '128 GB'
    }
]

console.log(
    `Merek Hp : ${spekHP[2].nama}, RAM ${spekHP[2].ram}, Internal ${spekHP[2].internal}`
);

//Perulangan FOR
let baris = 100;
console.clear();
for (let i = 1; i<=baris; i++){
    console.log(' '.repeat(baris-i)+'#'.repeat(i)+'#'.repeat(i)+' '.repeat(baris-i));
}

console.clear();
for (let index = 0; index < spekHP.length; index++) {
    const element = spekHP[index];
    console.log(
      `Merek hp : ${element.nama} RAM ${element.ram} Internal ${element.internal}`
    );
}

