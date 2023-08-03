const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    course_id:{
        type: Number,
        required: [true,'Please enter a course id']
    },
    course_mentor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor',
        required: [true,'Please select a mentor']
    },
    course_name:{
        type: String,
        required: [true,'Please enter a course name']
    },
    start_date:{
        type: Date,
        required: [true,'Please enter a start date']
    },
    end_date:{
        type: Date,
        required: [true,'Please enter an end date']
    },
    description:{
        type: String,
        required: [true,'Please enter a description']
    },
    is_active:{
        type: Boolean,
        default: true
    }
})