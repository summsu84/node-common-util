const dateUtil = require('./index').getDateUtil;
const stringUtil = require('./index').getStringUtil;

console.log(dateUtil.getTomorrow());
console.log(dateUtil.isTodayDateFromStringValue('20190724'));
console.log(dateUtil.convertYYYY_MM_DD(new Date()));
console.log(dateUtil.convertYYYYMMDD(new Date()));
console.log(dateUtil.convertYYYYMMDDHHMMSS(new Date()));

console.log('#####string utill test#####');
console.log(stringUtil.removeSpace("hello world. This is test"));
console.log(stringUtil.insertString('hello', 'test', 2));
console.log(stringUtil.replaceText('hello', 'l', 'z'));
console.log(stringUtil.concatString('hello', 'k'))