'use strict'

const StringUtil = require('./string-util');
const stringUtil = new StringUtil();

module.exports = class DateUtil {
    // constructor(생성자)
    constructor() {

    }

    getTomorrow() {
        const today = new Date();

        return new Date(today.valueOf() + (24 * 60 * 60 * 1000));
    }

    /**
     *  Date Format
     */

    /**
     * convert date format to YYYY-MM-DD
     * @param d
     * @returns {string}
     */
    convertYYYY_MM_DD(date) {
        const yyyy = date.getFullYear().toString();
        const mm = (date.getMonth() + 101).toString().slice(-2);
        const dd = (date.getDate() + 100).toString().slice(-2);
        return `${yyyy}-${mm}-${dd}`;
    }

    /**
     * convert date format to YYYYMMDD
     * @param d
     * @returns {string}
     */
    convertYYYYMMDD(date) {
        const yyyy = date.getFullYear().toString();
        const mm = (date.getMonth() + 101).toString().slice(-2);
        const dd = (date.getDate() + 100).toString().slice(-2);
        return `${yyyy}${mm}${dd}`;
    }

    /**
     *  convert date format to YYYYMMDDHHSS
     * @param date
     * @returns {string}
     */
    convertYYYYMMDDHHMMSS(date)  {
        return date.getFullYear().toString() + this.pad2(date.getMonth() + 1) + this.pad2( date.getDate()) + this.pad2( date.getHours() ) + this.pad2( date.getMinutes() ) + this.pad2( date.getSeconds() )
    }

    /**
     *  check date if weather today
     * @param date
     * @returns {boolean}
     */
    isTodayDateFromStringValue(date)  {
        const today = new Date();
        const tmp = stringUtil.insertString(date, '-', 4);
        const newDateTmp = stringUtil.insertString(tmp, '-', 7);
        const checkDate = new Date(newDateTmp);

        if(today.getDate() === checkDate.getDate() && today.getMonth() === checkDate.getMonth() && today.getFullYear() === checkDate.getFullYear())
        {
            return true;
        }else
        {
            return false;
        }
    }

    /**
     *  get year from input date
     * @param d
     * @returns {string}
     */
    getYearFromDate(d)  {
        return d.getFullYear().toString();
    }

    /**
     *  get month from input date
     * @param d
     * @returns {string}
     */
    getMonthFromDate(d)  {
        return (d.getMonth() + 101).toString().slice(-2);
    }

    /**
     *  get day from input date
     * @param d
     * @returns {string}
     */
    getDayFromDate(d)  {
        return (d.getDate() + 100).toString().slice(-2);
    }

    pad2 (n)
    {
        return n < 10 ? '0' + n : n
    }
}
