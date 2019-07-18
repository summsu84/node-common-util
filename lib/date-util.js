'use strict'

class DateUtil {
    // constructor(생성자)
    constructor() {
        this.connection = null;
    }

    init(connection) {
        console.log(">>PlaceModel init .. connection value : " + connection)

        this.connection = connection;
    }

    getTomorrow() {
        const today = new Date();

        return new Date(today.valueOf() + (24 * 60 * 60 * 1000));
    }
}

module["exports"] = new DateUtil();