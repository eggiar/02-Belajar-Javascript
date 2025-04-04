//A. Latihan Tipe Data String dan lainnya
//Latihan 1 : Manipulasi String

function formatName(name = "") {
  return console.log(
    name
      .split(" ")
      .map((char) => char.charAt(0).toUpperCase() + char.slice(1).toLowerCase())
      .join(" ")
  );
}

formatName("eGGi aUnur rOfiq"); // Output: "Eggi Aunur Rofiq"
formatName("jOhn DOE"); // Output: "John Doe"

//Latihan 1 Selesai

//Latihan 2 : Template Literals
function introduce(name, age, hobby) {
  console.log(
    `Halo, nama saya ${name}. Saya berusia ${age} tahun dan saya suka ${hobby}`
  );
}

introduce("Eggi", 25, "programming");
// Output: "Halo, nama saya Eggi. Saya berusia 25 tahun dan saya suka programming."

//Latihan 2 Selesai

//Latihan 3 : Generate password acak
function generatePassword(passwordLenght = 4) {
  const allCharacter =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let password = "";

  if (passwordLenght < 4) {
    return "Password minimal 4 karakter";
  } else {
    for (let i = 0; i < passwordLenght; i++) {
      let randomIndex = Math.floor(Math.random() * allCharacter.length);
      password += allCharacter[randomIndex];
    }

    return password;
  }
}
console.log(generatePassword(8)); // Output: "Xy3bA9zQ" (acak)
console.log(generatePassword(10)); // Output: "pL8mT2wQv9" (acak)

//Latihan 3 Selesai

//Latihan 4 Kalkulator sederhana
function calculate(num1, num2, operator) {
  let result = 0;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      result = "Error: Cannot divide by zero";
    } else {
      result = num1 / num2;
    }
  }
  return result;
}

console.log(calculate(10, 5, "+")); // Output: 15
console.log(calculate(10, 5, "*")); // Output: 50
console.log(calculate(10, 0, "/")); // Output: "Error: Cannot divide by zero"
