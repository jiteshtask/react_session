/**
 * Response Model for successful response
 * @export
 * @class Response
 */
class Response {
    constructor(data = {}) {
        this.data = data || {};
        this.statusCode = 200;
    }
}

module.exports = Response