var log = console.log

//1. Объявлнеие

// const regExp1 = /love/gmi;
// const regExp2 = new RegExp(`love`, 'gmi');

// function checkSubstring(str, subStr) {
//     const regExp = new RegExp(subStr);
//     return regExp.test(str);
// }

// log(checkSubstring('I love you', 'you')) // true

// 2. Флаги

// i - нечувтсвительности к регистру. 
// log(/LOVE/i.test('I love you')); // true

// g - глобальный поиск
// log('I love love you'.match(/love/)) // [ 'love', index: 2, input: 'I love love you', groups: undefined ]
// log('I love love you'.match(/love/g)) // [ 'love', 'love' ]

// m - мультистрочного поиска. 
// const str = `1 котенок
// 2 котенок
// 3 котенок`;
// log(str.match(/^\d/gm)); // [ '1', '2', '3' ]

// 3. Методы

// - str.match(regexp)

// log('I love love you'.match(/love/)) // [ 'love', index: 2, input: 'I love love you', groups: undefined ]
// log('I love love you'.match(/love/g)) // [ 'love', 'love' ]

// - str.replace(regexp, '')
// log('I love you'.replace(/love/, 'like')) // I like you

// - regexp.test(str)
// log(
//     /love/.test('I love you')) // true

//4. Буквенные классы

// \d - любая цифра
// \w - латинская буква, цифр, _
// \s - пробел
// \D - люой сивол кроме цифры
// \W - любой сивол кроме латинской буквы, цифр, _
// \S - любой символ кроме пробела
// . - любой символ кроме \n.

// 5. Якоря
// ^ - начало строки
// $ - конец строки
// \b - граница слова

// log( /^\d\d$/.test('22 jan') ) // false
// log( /^\d\d$/.test('22') ) // true

// log(/\bJava\b/i.test("Java!")) // true
// log(/\bJava\b/i.test("JavaScript")) //false

// 6 Пропусе специальных символов.
// Спеециальные символы: [ \ ^ $ ( ) . ? * + /
// Пропускаем их через обратный слэш.

// log( /\^\$\./i.test('^$.') ) // true
// или два \\ (обратных слэша) для:
// const myreg = new RegExp('\\^\\$\\.')
// log( myreg.test('^$.') ) // true

// 7. Наборы и диапазоны 26-я минута

