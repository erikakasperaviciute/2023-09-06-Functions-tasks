// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

function humanToDogYears(humanYears) {
  let dogYears = humanYears * 7;
  let output = `${humanYears} žmogaus metai yra ${dogYears} šuns metai.`;
  return output;
}

console.log(humanToDogYears(25));
console.log(humanToDogYears(10));

// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

function timeToReadABook(booksToRead) {
  let timeForABook = Math.round(365 / booksToRead);
  let output = `Norint perskaityti ${booksToRead} knygų per metus, vienai knygai perskaityti turėsi ${timeForABook} dienas.`;
  return output;
}

console.log(timeToReadABook(10));

// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną argumentą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

function daysToWeek(days) {
  let week = (days / 7).toFixed(1);
  let output = `${days} dienos yra ${week} savaitės.`;
  return output;
}

console.log(daysToWeek(25));

// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną argumentą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

function daysToYears(days) {
  let year = (days / 365).toFixed(2);
  let output = `${days} dienos yra ${year} metai.`;
  return output;
}

console.log(daysToYears(360));

// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną argumentą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

function yearsToHours(years) {
  let hours = years * 365 * 24;
  let output = `${years} metai turi ${hours} valandas.`;
  return output;
}

console.log(yearsToHours(6));

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

function monthsToHours(months) {
  let hours = months * (365 / 12) * 24;
  let output = `${months} mėnesiai turi ${hours} valandas.`;
  return output;
}

console.log(monthsToHours(5));

// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.

function monthsToMinutes(months) {
  let minutes = months * (365 / 12) * 24 * 60;
  let output = `${months} mėnesiai turi ${minutes} minutes.`;
  return output;
}

console.log(monthsToMinutes(2));

//Papildomai

//Antra

function timeToReadABook2(booksToRead) {
  let timeForABookInDays = Math.floor(365 / booksToRead);
  let remainingTimeForABookInHours = ((365 % booksToRead) * 24) / booksToRead;
  let output = `Norint perskaityti ${booksToRead} knygų per metus, vienai knygai perskaityti turėsi ${timeForABookInDays} dienas`;

  if (remainingTimeForABookInHours > 0) {
    output += ` ir ${remainingTimeForABookInHours} valandų.`;
  } else {
    output += `.`;
  }
  return output;
}

console.log(timeToReadABook2(20));

//Trečia

function daysToWeek2(days) {
  let fullWeek = 7;
  let week = Math.floor(days / fullWeek);
  let remainingDays = days % fullWeek;
  let output = "";
  let remainingDaysToFullWeek = fullWeek - days;

  if (week < 1) {
    output += `${days} dienos nesudaro pilnos savaitės. Iki pilnos savaitės liko ${remainingDaysToFullWeek} dienos.`;
  } else {
    output += `${days} dienos yra ${week} savaitės`;
    if (remainingDays > 0) {
      output += ` ir ${remainingDays} dienos.`;
    } else {
      output += `.`;
    }
  }

  return output;
}

console.log(daysToWeek2(24));

//Ketvirta

function daysToYears2(days) {
  let fullYear = 365;
  let year = Math.floor(days / fullYear);
  let remainingDays = days % fullYear;
  let output = "";
  let remainingDaysToFullYear = fullYear - days;

  if (year < 1) {
    output += `${days} dienos nesudaro pilnų metų. Iki pilnų metų liko ${remainingDaysToFullYear} dienos.`;
  } else {
    output += `${days} dienos yra ${year} metai`;
    if (remainingDays > 0) {
      output += ` ir ${remainingDays} dienų.`;
    } else {
      output += `.`;
    }
  }

  return output;
}

console.log(daysToYears2(368));
