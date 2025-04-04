// // Kode javascript untuk menampilkan arah kiblat
// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const data = new FormData(form);
//   const longitudeKiblat = data.get("LongitudeKiblat");
//   const latitudeKiblat = data.get("LatitudeKiblat");
//   const longitudeTempat = data.get("LongitudeTempat");
//   const latitudeTempat = data.get("LatitudeTempat");

//   console.log(longitudeKiblat, latitudeKiblat, longitudeTempat, latitudeTempat);
//   //mengeluarkan data di html
//   const p = document.querySelector("p");
//   p.innerHTML = `Longitude Kiblat: ${longitudeKiblat}, Latitude Kiblat: ${latitudeKiblat}, Longitude Tempat: ${longitudeTempat}, Latitude Tempat: ${latitudeTempat}`;
// });

function convertCoordinateToDecimal(coordinate) {
  const [degree, rest] = coordinate.split("°");
  const [minute, secondWithDirection] = rest.split("'");
  const [second, direction] = secondWithDirection.split('"');

  const decimal =
    parseInt(degree) + parseInt(minute) / 60 + parseInt(second) / 3600;
  return decimal;
}

function convertDecimalToCoordinate(decimal) {
  const degree = Math.floor(decimal);
  const minute = Math.floor((decimal - degree) * 60);
  const second = Math.round(((decimal - degree) * 60 - minute) * 60);
  return `${degree}°${minute}'${second}"`;
}

function radToDeg(rad) {
  return (rad * 180) / Math.PI;
}

function degToRad(deg) {
  return (deg * Math.PI) / 180;
}

function sinDeg(deg) {
  return Math.sin(degToRad(deg));
}

function cosDeg(deg) {
  return Math.cos(degToRad(deg));
}

function asinDeg(value) {
  // Pastikan value berada di antara -1 dan 1
  if (value < -1 || value > 1) {
    throw new Error("Input harus berada antara -1 dan 1");
  }
  // Hitung arc sine (dalam radian)
  const radianResult = Math.asin(value);
  // Konversi hasil dari radian ke derajat
  return radToDeg(radianResult);
}
function acosDeg(value) {
  // Pastikan value berada di antara -1 dan 1
  if (value < -1 || value > 1) {
    throw new Error("Input harus berada antara -1 dan 1");
  }
  // Hitung arc sine (dalam radian)
  const radianResult = Math.acos(value);
  // Konversi hasil dari radian ke derajat
  return radToDeg(radianResult);
}
