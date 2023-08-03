const Teacher= require('../models/teacher');

//Create a new teacher
exports.creteTeacher = async(req,res)=>{
    const teacher = await Teacher.create(req.body);
    res.status(201).json({success:true,teacher});
}

//Get all teachers

exports.getTeachers = async(req,res)=>{
    let teachers = await Teacher.findAll();
    res.status(200).json({success:true,teachers});
}

//Get a single teacher

exports.getSingleTeacher = async(req,res)=>{
    let teacher = await Teacher.findById(req.params.teacher_id);
    res.status(200).json({success:true,teacher});
}

//Update a teacher

exports.updateTeacher = async(req,res)=>{
    let teacher = await Teacher.findById(req.params.teacher_id);
    teacher.update(req.body);
    res.status(200).json({success:true,teacher});
}

//Delete a teacher

exports.deleteTeacher = async(req,res)=>{
    const teacher = await Teacher.findById(req.params.teacher_id);
    if(!teacher){
        return res.status(404).json({success:false,message:'Teacher not found'});
    }
    await teacher.deleteOne();
    res.status(200).json({success:true,message:'Teacher deleted successfully'});
}
exports.getTeacherDetails= async(req,res)=>{
    let teacher = await Teacher.findById(req.params.teacher_id);
    if(!teacher){
        return res.status(404).json({success:false,message:'Teacher not found'});
    }
    res.status(200).json({success:true,teacher});
}