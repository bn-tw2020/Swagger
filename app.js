const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.send('Hello World!');
});

app.get('/adder', (req,res)=> {
    let one = req.query.one;
    let two = req.query.two;
    let result = Number(one) + Number(two);
    res.send(String(result));
});

app.listen(port, _=>{
    console.log(`Server listening on port ${port}`);
});