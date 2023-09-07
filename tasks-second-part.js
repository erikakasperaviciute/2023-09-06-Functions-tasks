// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du argumentus:
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

function conversion(days, format) {
  let convertToMinutes = days * 24 * 60;
  let convertToHours = days * 24;
  let convertToWeek = (days / 7).toFixed(1);
  let convertToMonth = (days / 30).toFixed(2);
  let convertToYears = (days / 365).toFixed(3);
  let output = "";

  if (format === "minutes") {
    output = ` ${days} days - ${convertToMinutes} minutes.`;
  }
  if (format === "hours") {
    output = ` ${days} days - ${convertToHours} hours.`;
  }
  if (format === "weeks") {
    output = ` ${days} days - ${convertToWeek} weeks.`;
  }
  if (format === "months") {
    output = ` ${days} days - ${convertToMonth} months.`;
  }
  if (format === "years") {
    output = ` ${days} days - ${convertToYears} years.`;
  }

  return output;
}

console.log(conversion(5, "minutes"));
console.log(conversion(1, "hours"));
console.log(conversion(14, "weeks"));
console.log(conversion(29, "months"));
console.log(conversion(364, "years"));

// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du argumentus:
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.

function division(dalinys, daliklis) {
  let liekana = dalinys % daliklis;
  let output = "";

  if (dalinys % daliklis === 0) {
    output = `${dalinys} dalinasi iš ${daliklis}.`;
  } else {
    output = `Skaičius ${dalinys} nesidalina iš ${daliklis}. Liekana yra ${liekana}.`;
  }

  return output;
}
console.log(division(10, 2));
console.log(division(11, 3));

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

function evenNumberOfLetters(originalText) {
  let text = originalText.trim();
  let textLength = text.length;
  let output = "";

  if (textLength % 2 === 0) {
    output = `Įvestas tekstas "${text}" turi porinį raidžių skaičių.`;
  } else {
    output = `Įvestas tekstas "${text}" turi neporinį raidžių skaičių.`;
  }

  return output;
}

console.log(evenNumberOfLetters("abc"));

// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio.
// 11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
// 11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

// 11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

// 11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.

// function getCharacter(text, characterNo) {
//   let textLength = text.length;
//   let realCharacterNo = characterNo - 1;
//   let character = text.charAt(realCharacterNo);
//   let output = "";

//   if (realCharacterNo > 0 && realCharacterNo < textLength) {
//     output = `Teksto "${text}" ${characterNo} raidė yra "${character}".`;
//   } else if (realCharacterNo > textLength) {
//     output = `Tekstas "${text}" turi ${textLength} simbolius, o jūs nurodėte grąžinti ${characterNo}.`;
//   }

//   return output;
// }

// console.log(getCharacter("abc", 5));

function getCharacter(text, characterNo) {
  let textLength = text.length;
  let realCharacterNo = characterNo - 1;
  let character = text.charAt(realCharacterNo);
  let characterReverse = text.charAt(realCharacterNo + textLength + 1);
  let output = "";

  if (realCharacterNo > 0 && realCharacterNo < textLength) {
    output = `Teksto "${text}" ${characterNo} raidė yra "${character}".`;
  } else if (realCharacterNo > textLength) {
    output = `Tekstas "${text}" turi ${textLength} simbolius, o jūs nurodėte grąžinti ${characterNo}.`;
  }
  if (realCharacterNo <= 0) {
    output = `Teksto "${text}" ${characterNo} raidė yra "${characterReverse}".`;
  }

  return output;
}

console.log(getCharacter("abc", -3));
