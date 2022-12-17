const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema(
    {
        firstName:{
            type:String,
            required: [
                true,
                'First name is required'
            ],
            minLength:[ 3, 'First name must be at least 3 characters']
        },
        lastName:{
            type:String,
            required: [
                true,
                'Last name is required'
            ],
            minLength: [ 3, 'Last name must be at least 3 characters']
        }
    }
);

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;