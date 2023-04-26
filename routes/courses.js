// const ex = require('express')
// const { route }= require("express/lib/application"); 
// const router = ex.Router
 
// //creating the routers

// router.get("/courses",(req,res)=>{
// res.send("hello, your courses is here");
// }) 
 
// module.exports=router; 
const { Router } = require('express');
const Course = require("../models/course")
const router = Router(); 
//getting all the courses
router.get('/', async (req, res) => {
  try{
    const courses = await Course.find()
  res.json(courses);
  }
  catch(err){
  res.json(err);
  }
});

//get single courses
router.get("/:courseId", async (req,res) => {
    const courseId = req.params.courseId
    try{

       const c= await Course.findById(courseId);
       res.json(c);
    } catch(error){ 
       res.json(err); 
    }
}); 

// create course
router.post("/",  async (req,res)=>{
 const course = await Course.create(req.body)
 res.json(course) 
})

//delete course
router.delete("/:courseId", async(req,res)=>{
try{
     await Course.remove({_id: req.params.courseId})
     res.status(200).json({
        message:"done",
     });
} catch(error){
    res.json(error) 
}
})
//updata courses
router.put("/:courseId", async(req,res)=>{
    const courseId=req.params.courseId
    try{
        const course = await Course.updateOne(
            {
                "_id":courseId
            },
            req.body
          
        ) 
        res.json(course)
    }
    catch{
      res.send(error) 
    }
})
 


module.exports = router;

 