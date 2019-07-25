
# Node-Common-Util Project - Simple Common Util Helper

## Summary

This is just designed to help to handle some jobs related to string or date.

## Simple String Util

This module is handle string object like inserting value at specific position, replace text, remove space, or etc.

```js
const stringUtil = require('./lib/string-util');

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


---


## Simple Date Util

This module is handle date, for example, coverting date format, check date, getting tomorrow, or etc.

```js
const dateUtil = require('./lib/date-util');

## removeSpace
## -> This function is remove space of string object
console.log(stringUtil.removeSpace("hello world. This is test"));
// landRegId, tempRegId, stnId code can be found on KMA's web site.
const serviceKey = '[Input Middle Forecast KMA Open API Key]';

/**
*  params
*  serviceKey : serviceKey,
*  type : service Type, (0 : forecast request, 1 : middle forecast request)
*  success callback
*  error callback
*/
KmaHelper.requestWeatherRequest(serviceKey, 1, options, (code, result) =>{
    // This function is success callback which you need to customize.
    console.log(code, result);
}, (err,code, msg) => {
     // This function is error callback which you need to customize.
    console.log(err);
} );
```


---

