function convertToRoman(num) {
  // Define arrays for Roman numerals and their corresponding values
  const romanNumerals = [
    { value: 100000, numeral: 'C' },
    { value: 90000, numeral: 'XC' },
    { value: 50000, numeral: 'L' },
    { value: 40000, numeral: 'XL' },
    { value: 10000, numeral: 'X' },
    { value: 9000, numeral: 'IX' },
    { value: 5000, numeral: 'V' },
    { value: 4000, numeral: 'IV' },
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }

  return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
