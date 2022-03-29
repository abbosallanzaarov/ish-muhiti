"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//express
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//port
const port = 2020;
//handlebars
const express_handlebars_1 = require("express-handlebars");
app.engine('.hbs', (0, express_handlebars_1.engine)({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.listen(port, () => {
    console.log('http://127.0.0.1:' + port);
});
app.get('/', (req, res) => {
    res.render('main', { layout: 'index' });
});
const arrayobj = [];
app.post('/detal', (req, res) => {
    let obj = {
        name: req.body.name,
        fam: req.body.fam,
        age: req.body.age
    };
    arrayobj.push(obj);
    res.redirect('/');
});
app.get('/table', (req, res) => {
    res.render('table', { layout: 'index', array: arrayobj });
});
