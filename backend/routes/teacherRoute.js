const express= require('express');
const {getTeachers,createTeacher,getSingleTeacher,updateTeacher, deleteTeacher,getTeacherDetails} = require('../controllers/teacherController');
const router= express.Router();

router.route('/teacher').get(getTeachers)
router.route('/teacher/new').post(createTeacher);
router.route('/teacher/:id').put(updateTeacher).delete(deleteTeacher).get(getTeacherDetails);

module.exports=router;