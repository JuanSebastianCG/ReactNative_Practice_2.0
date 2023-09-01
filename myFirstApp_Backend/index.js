console.log("hola desde index")
const express= require("express")
const app= express()

const { default: mongoose } = require("mongoose");
const {HOST,PORT, API_PATH,USERNAME,PASSWORD,DB_HOST} = require("./variables");
const bodyParser = require("body-parser");



console.log(`mongodb+srv://${USERNAME}:${PASSWORD}/${DB_HOST}`)
mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@${DB_HOST}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Active port ${PORT}`)
    })
})
.catch((err)=>console.log(err))

app.use(bodyParser.json())
app.use('/',(req,res)=>{
    /* http://localhost:3000/api/v1 */
    res.send("hola al dasboard")
})