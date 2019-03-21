const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
    res.send('Only a test')
});

router.get('/ex1/:placeholder1/:placeholder2',(req,res)=>{
    res.render('index', {placeholder1: req.params.placeholder1, placeholder2: req.params.placeholder2})
});

router.get('/ex2/:placeholder', (req,res)=>{
    res.render('ex2', {placeholder: req.params.placeholder})
});

router.get('/ex3', (req,res)=>{
    res.render('ex3')
});


module.exports = router;