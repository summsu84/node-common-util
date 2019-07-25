'use strict'

module.exports = class StringUtil {
    // constructor
    constructor() {

    }

    /**
     *  replace text source to target in obj
     * @param obj
     * @param source
     * @param target
     * @returns {string | void | *}
     */
    replaceText (obj, source, target) {
        return obj.replace(source, target);
    }


    /**
     *  remove space within data
     * @param data
     * @returns {string | void | *}
     */
    removeSpace(data)  {
        const retVal = data.replace(/(\s*)/g, "");
        return retVal;
    }

    /**
     *  add
     * @param stringVal
     * @param index
     * @returns {T[] | string}
     */
    concatString(stringVal, val)
    {
        const retVal = stringVal.concat(val);
        return retVal;
    }

    /**
     *  add string value at position
     * @param src
     * @param val
     * @param position
     * @returns {string}
     */
    insertString(src, val, position)
    {
        const output = [src.slice(0, position), val, src.slice(position)].join('');
        return output;
    }

}
