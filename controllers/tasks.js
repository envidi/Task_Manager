const Task = require('../models/Tasks')
const asyncWrapper = require('../middlewares/async.js')
const { createCustomError,CustomAPIError} = require('../errors/custom-error.js')
const getAllTasks = asyncWrapper( async (req, res) => {
  
    const tasks = await Task.find({})
    
    res.status(201).json({tasks});
  
    
  
});
const getOneTask = asyncWrapper( async (req, res,next) => {
  
    const {id : taskId} = req.params
    const task = await Task.findOne({_id: taskId})
    
    if(!task){
      
      return next(createCustomError(`Task not found with id   ${taskId}`,404))
     
    }
    res.status(200).json({task})
  

  
});
const createTask = asyncWrapper( async(req, res) => {
  
    const task = await Task.create(req.body)
    res.status(201).json({task});
 
  
});

const deleteTask = asyncWrapper(async (req, res,next) => {
    const { id : taskId } = req.params
    const task = await Task.findOneAndDelete({_id : taskId})
    if(!task){
      return next(createCustomError(`Task not found with id   ${taskId}`,404))
    }
    res.status(200).json({task})
 
 
});
const updateTask = asyncWrapper( async (req, res,next) => {
  
    const { id : taskId } = req.params
    const task = await Task.findOneAndUpdate({_id : taskId},req.body,{
      new: true,
      runValidators: true
    })
    if(!task){
      return next(createCustomError(`Task not found with id   ${taskId}`,404))
    }
    res.status(200).json({task})
 
});



module.exports = {
  getAllTasks,
  getOneTask,
  createTask,
  deleteTask,
  updateTask,
  
};