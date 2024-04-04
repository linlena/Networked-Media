// IMPORT express
const express = require('express')
const app = express()

// IMPORT parser
const parser = require('body-parser')
const encodedParser = parser.urlencoded({extended: true})
app.use(express.static('public'))
app.use(encodedParser)

// INITIATE multer
const multer = require('multer')
const uploadProcessor = multer({dest: 'public/upload/'})

// INITIALIZE template engine (to look at views folder for rendering)
app.set('view engine', 'ejs')
// bodyParser
// let bodyParser = require('body-parser');
// let urlencodedParser = bodyParser.urlencoded({ extended: true }); 

// DATABASE: importing netb library, creating new database and loading it
var Datastore = require('@seald-io/nedb')
var db = new Datastore({filename: "data.db", autoload: true});

// // projects array
// const projects = []

// ROUTE: HOME
// app.get('/', (req, res)=>{

//     res.render('index.ejs', {projects})
// })
app.get('/', (req, res)=>{
    db.find({}, (err, projects)=>{
        if(err){
            console.log(err)
        }
        res.render('index.ejs', {projects})
    })
})

// ROUTE: ADD PROJECT
app.get('/add', (req, res)=>{
    res.render('add.ejs')
})

// ROUTE: UPLOAD
app.post('/upload', uploadProcessor.single('theimage'), (req, res)=>{

    let newProject = {
        name: req.body.name,
        members: req.body.members
    }

    if(req.file){
        newProject.file = 'upload/'+req.file.filename
    }

    db.insert(newProject, (err, project)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/')
        console.log(project)
    })

    // projects.push(newProject)
    // res.redirect('/')
    // console.log(projects)
})

// ROUTE: HOME
app.get('/home', (req, res)=>{
    res.render('header.ejs')
})

app.listen(5555, ()=> {
    console.log('server starts')
})

// FLOP CODE

// app.post('/add',(req, res)=>{
//     const newProject = {
//         name: req.query.name,
//         file: req.query.file,
//         members: req.query.members
//     }
//     console.log(req.body)
//     console.log(newProject)
//     projects.push(newProject)

//     res.redirect('/')
// });

// app.get("/submit", function(req, res) {

//     projects.push({
//         name: req.query.name,
//         file: req.query.file,
//         members: req.query.members
//     })

//     res.redirect('/')
// })