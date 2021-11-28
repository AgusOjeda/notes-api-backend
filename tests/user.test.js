const User = require('../models/User')
const bcrypt = require('bcrypt')
const { api } = require('../tests/helper')

describe.only('Creating a new user', () => {
    beforeEach(async () =>{
        await User.deleteMany({})

        const passwordHash = await bcrypt.hash('pswd', 10)
        const user = new User({
            username: 'miduroot',
            passwordHash
        })

        await user.save()
    })

    test('Works as expected creating a fresh username', async () => {
        const usersDB = await User.find({})
        const userAtStart = usersDB.map(user => user.toJSON())

        const newUser = {
            username: 'miduroot',
            name: 'Agustin',
            password: 'tw1tch'
        }

        await api.post('/api/users').send(newUser).expect(200).expect('Content-Type',/application\/json/)

        const usersDBAfter = await User.find({})

        const usersAtEnd = usersDBAfter.map(user => user.toJSON())

        expect(usersAtEnd).toHaveLenght(usersAtStart.length + 1)

        const usernames = usersAtEnd.map(u => u.username)

        expect(usernames).toContain(newUser.username)


    })
})