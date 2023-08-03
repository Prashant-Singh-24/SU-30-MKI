const mongoose = require('mongoose')

const teacherSchema = mongoose.Schema({
    teacher_id:{
        type: Number,
        required: [true,"Please enter valid Id"]
    },
    teacher_name:{
        type: String,
        required:[true,"Please enter your name"]
    },
    is_active:{
        type: Boolean,
        default: true
    },
    designation:{
        type: String,
        required: [true,"Please enter your designation"]
    }

});

module.exports = mongoose.model('Teacher',teacherSchema);