const express = require('express');
const app = express();
const taskRouter = require('./routes/tasks.js')
const Notfound = require('./middlewares/not-found.js')
const ErrorHandleMiddleware = require('./middlewares/error-handler.js')
const port = 3000
const connectDB = require('./db/connect.js')
require('dotenv').config()
app.use(express.static('./public'));
app.use(express.json())

app.get("/", function(req, res){
    res.send("task manager")
})
app.use('/api/v1/tasks',taskRouter)
app.use(Notfound)
app.use(ErrorHandleMiddleware)


const start  = async () =>{
   try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, function(){
        console.log(`Task manager server listening at http://localhost:${port}`)
    })
   } catch (error) {
    console.log(error)
   }
}
start()


