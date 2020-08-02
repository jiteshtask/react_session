var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;  


const options = {
    toJSON: {
        transform: (doc, obj) => {
            delete obj.__v;
            delete obj.id;
            return obj;
        },
        virtuals: false,
    },
    strict: false,
    collection: 'contact',
};

const contactSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    mobile: {
        type: String,
    }
}, options);

const contactModel = Mongoose.model('contact', contactSchema);

class contact {
    constructor() {
        this.model = contactModel;
    }
    static get modelName() {
        return contactModel.modelName;
    }
}
module.exports = contact