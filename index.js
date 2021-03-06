require('dotenv').config()
require('./mongo')
const express = require('express')
const app = express()
const cors = require('cors')
const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')
const usersRouter = require('./controllers/users')
const vehiclesRouter = require('./controllers/vehicles')

app.use(cors())
app.use(express.json())



app.get('/',(request,response)=>{
    response.send('<h1>HelloWorld</h1>')
})
/*
app.get('/api/notes', (request,response)=>{
    Note.find({}).then(notes=>{
        response.json(notes/* notes.map(note=>{
            const{_id, __v, ...restOfNote} = note
            return{
                ...restOfNote,
                id:_id
            }
        }) )
    })
})

app.get('/api/notes/:id', (request,response, next)=>{
    const { id } = request.params

    Note.findById(id).then(note =>{
        if(note){
            response.json(note)
        }else{
            response.status(404).end()
        }
    }).catch(err => {
        next(err)
    })
})

app.delete('/api/notes/:id', (request, response, next) =>{
    const { id } = request.params
    
    Note.findByIdAndDelete(id).then(() => {
        response.status(204).end()
    }).catch(error => next(error))
})

app.put('/api/notes/:id', (request,response, next)=>{
    const { id } = request.params

    const note = request.body

    const newNoteInfo = {
        content: note.content,
        important: note.important
    }

    Note.findByIdAndUpdate(id, newNoteInfo, {new: true}).then(result =>{
        response.json(result)
    })
})

app.post('/api/notes', (request, response) =>{
    const note = request.body

    if(!note || !note.content){
        return response.status(400).json({
            error: 'note.content is missing'
        })
    }

    const newNote = new Note({
        content: note.content,
        date: new Date().toISOString(),
        important: typeof note.important !== 'undefined' ? note.important : false
    })
    newNote.save().then(savedNote => {
        response.status(201).json(savedNote)
    })
    
})
*/
app.use('/api/users', usersRouter)

app.use('/api/vehicles', vehiclesRouter)

app.use(notFound)

app.use(handleErrors)

const PORT = process.env.PORT || 3001

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})
