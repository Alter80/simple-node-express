const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// first node program. 
const handler = (req, res) => {
    res.send('Hello From Node, Chceked by nodemon, just start nodemon index.js. save and reload to the browser');
}

app.get('/', handler);

// newData like API
const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: '01788989898' },
    { id: 1, name: 'Shucorita', email: 'Shucorita@gmail.com', phone: '01788989898' },
    { id: 2, name: 'Sharbonti', email: 'Sharbonti@gmail.com', phone: '01788989898' },
    { id: 3, name: 'Sonya', email: 'Sonya@gmail.com', phone: '01788989898' },
    { id: 4, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788989898' },
    { id: 5, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788989898' },

]

app.get('/users', (req, res) => {
    // searching
    // use query parameter
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

    res.send(users);
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body);

    // res.send(JSON.stringify(newUser)); //or
    res.json(newUser);
})

// dynamic api
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    // console.log(req.params.id);
})

// Port Listening (OPTIONAL)
app.listen(port, () => {
    console.log('Listening to the port.')
})



// to execute this program type in cmd => node index.js(or the file name you want to execute)

// then it will show its listening or not. for confirmation the text inside app.listen will be printed in the console.

// then go to the browser type localhost:3000 and the node res.send will be shown. 
