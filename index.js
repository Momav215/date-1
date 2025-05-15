function getDateFormat(date, separator = '.') {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
  const year = date.getFullYear();

  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;

  return `${formattedDay}${separator}${formattedMonth}${separator}${year}`;
}

const today = new Date();
console.log(getDateFormat(today)); // ДД.ММ.ГГГГ
console.log(getDateFormat(today, '-')); // ДД-ММ-ГГГГ

const specificDate = new Date(2001, 4, 5); // 5 мая 2001 года (месяц 4 - это май)
console.log(getDateFormat(specificDate)); // 05.05.2001
console.log(getDateFormat(specificDate, '-')); // 05-05-2001