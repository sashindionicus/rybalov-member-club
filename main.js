const express = require('express')
const app = express()

app.use(express.json())


let members = [
    {
        id: 1,
        name: "Jhon Snow",
        email: "j.snow@company.com",
        date: "17.01.2019"
    },
    {
        id: 2,
        name: "Dana A.Watkins",
        email: "Dana2000@mail.com",
        date: "05.12.2020"
    },
    {
        id: 3,
        name: "Henri Rousseau",
        email: "rousseau@impressionism.fr",
        date: "10.05.2021"
    },
    {
        id: 4,
        name: "Mr.Brown",
        email: "brown@gmail.com",
        date: "15.05.2021"
    },
]

const generateId = () => {
    const maxId = members.length > 0
      ? Math.max(...members.map(n => n.id))
      : 0
    return maxId + 1
}

app.get('/api/members', (req, res) => {
    res.json(members)
})

app.get('/api/members/:id', (request, response) => {
    const id = Number(request.params.id)
    const member = members.find(member => member.id === id)
    
    if (member) {
        response.json(member)
      } else {
        response.status(404).end()
    }
}) 

app.post('/api/members', (request, response) => {
    const body = request.body
    
    if (!body.name) {
        return response.status(400).json({ 
          error: 'body missing' 
        })
    } else if (!body.email) {
        return response.status(400).json({ 
          error: 'email missing' 
    })
    }

    if (members.find(member => member.email === body.email)) {
        return response.status(400).json({
            error: 'email must be unique'
        })
    }

    const member = {
        id: generateId(),
        name: body.name,
        email: body.email,
        date: new Date(),
    }

    members = members.concat(member)

    response.json(member)
   
})

// After routes
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})