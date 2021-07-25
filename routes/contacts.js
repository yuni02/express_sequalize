const express = require('express');
const router = express.Router();


router.get('/products', ( _ , res) => {
    res.render( 'contacts/products.html' , 
        { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    );
});

router.get('/products/write', ( _ , res) => {
    res.render( 'contacts/write.html');
});

router.post('/products/write', ( req , res ) => {
    res.send(req.body);
});