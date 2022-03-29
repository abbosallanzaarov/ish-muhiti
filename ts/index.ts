//express
import express from 'express'
const app = express();
//port
const port:number = 2020;
//handlebars
import { engine } from 'express-handlebars';
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');
app.use(express.json())
app.use(express.urlencoded())

app.listen(port, ()=>{
    console.log('http://127.0.0.1:'+port);
})
app.get('/' , (req,res)=>{

    res.render('main',{layout: 'index'});
    
})

const arrayobj:(number|string|object)[] = [];

app.post('/detal' ,(req ,res)=>{

    let obj = {
        name:req.body.name,
        fam:req.body.fam,
        age:req.body.age
    }
    arrayobj.push(obj);
    res.redirect('/')
})
app.get('/table' , (req,res)=>{
    res.render('table', {layout: 'index' , array:arrayobj})
})
