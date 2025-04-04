//C. Manipulasi data Array
//Latihan 1 : Manipulasi data Array
function manipulasiArray(arr = []) {
  arr.push("Javascript");
  arr.pop();
  arr.unshift("halo");
  return arr;
}

console.log(manipulasiArray(["Saya", "sedang", "belajar"]));
// Output: ["Halo", "Saya", "sedang", "belajar"]

//Latihan 2: Mencari Nilai Tertinggi dan Terendah di Array
function cariNilai(arrNumber = []) {
  let min = arrNumber[0];
  let max = arrNumber[0];

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < min) {
      min = arrNumber[i];
    }
    if (arrNumber[i] > max) {
      max = arrNumber[i];
    }
  }

  return [min, max];
}

console.log(cariNilai([4, 9, 2, 8, 1]));
// Output: [1, 9]

//Latihan 3: Menggabungkan Dua Array
function gabungArray(arr1 = [], arr2 = []) {
  // for (let index = 0; index < arr2.length; index++) {
  //     arr1.push(arr2[index])
  //  }
  // return arr1;

  //Alternatif dengan concat
  return arr1.concat(arr2);
}

console.log(gabungArray(["apel", "jeruk"], ["mangga", "anggur"]));
// Output: ["apel", "jeruk", "mangga", "anggur"]

//Latihan 4: Filter Angka Genap dari Array
function filterGenap(arr = []) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(filterGenap([1, 2, 3, 4, 5, 6]));
// Output: [2, 4, 6]

//Latihan 5: Mengurutkan Array
function urutkanArray(arr = []) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

console.log(urutkanArray([3, 1, 4, 10, 5, 9, 1, 1, 1, -1]));
// Output: [1, 1, 3, 4, 5, 9]

//Latihan 6: Mengakses Elemen dalam Array Multidimensional
function aksesArrayMultidimensi(arr, x, y) {
  return arr[x][y];
}

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(aksesArrayMultidimensi(data, 1, 2));
// Output: 6