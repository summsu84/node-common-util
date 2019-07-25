
# Node-Common-Util Project - Simple Common Util Helper

## Summary

This is just designed to help to handle some jobs related to string or date.

## Simple String Util

This module is handle string object like inserting value at specific position, replace text, remove space, or etc.

```js
const stringUtil = require('common-util-teamjw').StringUtil;

## removeSpace
## -> This function is remove space of string object
console.log(stringUtil.removeSpace("hello world. This is test"));

## insertString (stringObject, stringValue, position)
## -> This function is insert stringValue to position of stringObject

console.log(stringUtil.insertString('hello', 'test', 2));

## replaceText(stringObject, stringSrc, stringTarget)
## -> This function is replace stringSrc of stringObject to stringTarget

console.log(stringUtil.replaceText('hello', 'l', 'z'));

## concatString(stringObject, stringValue)
## -> This function is append stringValue to stringObject

console.log(stringUtil.concatString('hello', 'k'))
```

---


## Simple Date Util

This module is handle date, for example, coverting date format, check date, getting tomorrow, or etc.

```js
const dateUtil = require('common-util-teamjw').DateUtil;

## getTomorrow
## -> This function is to get tomorrow date object

Date tomorrow = dateUtil.getTomorrow();

## convertYYYY_MM_DD
## -> This function is to covert date object to 'YYYY-MM-DD' formatted string object.

String convDate = dateUtil.convertYYYY_MM_DD(new Date());

## convertYYYYMMDD
## -> This function is to covert date object to 'YYYYMMDD' formatted string object.

String convDate = dateUtil.convertYYYYMMDD(new Date());

## convertYYYYMMDDHHMMSS
## -> This function is to covert date object to 'YYYYMMDDHHMMSS' formatted string object.

String convDate = dateUtil.convertYYYYMMDDHHMMSS(new Date());


## isTodayDateFromStringValue
## -> This function is to check weather if string of date is today or not. If that value is today, it will return true value, otherwise, it will return false value.

const isToday = dateUtil.isTodayDateFromStringValue('20190724');

## getYearFromDate
## -> This function is to get string year value from date object.

const strHour = dateUtil.getYearFromDate(new Date());

## getMonthFromDate
## -> This function is to get string month value from date object.

const strMonth = dateUtil.getMonthFromDate(new Date());

## getDayFromDate
## -> This function is to get string day value from date object.

const strDay = dateUtil.getDayFromDate(new Date());

```


---

