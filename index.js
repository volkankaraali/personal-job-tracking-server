// Import packages
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// App
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: "server is online",
    });
})

app.get('/priorities',(req,res)=>{
    res.json([
        {id:1,name:'Urgent'},
        {id:2,name:'Regular'},
        {id:3,name:'Trivial'},
    ])
});

// Starting server
app.listen(process.env.PORT|| 5000,()=>{
    console.log('server is live on:')
});