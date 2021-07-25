
const models = require('../../models')

exports.get_products = ( _ , res) => {
    // res.render( 'admin/products.html' , 
    //     { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    // );
    models.Contacts.findAll({

    }).then((contacts) => {
        res.render('contacts/products.html', {contacts})
    })
}

exports.get_products_write = ( _ , res) => {
    res.render( 'contacts/write.html');
}

exports.post_products_write = ( req , res ) => {
    // res.send(req.body);
    models.Contacts.create(req.body).then(()=>{
            res.redirect('/contacts/products')/*메인 페이지로 이동 */
        })
}

exports.get_products_detail = (req,res)=>{
    //req.params.id
    models.Contacts.findByPk(req.params.id).then((contact)=>{
        res.render('contacts/detail.html', {contact})
    })
}

exports.get_products_edit=(req,res)=>{
    models.Contacts.findByPk(req.params.id).then((contact)=>{
        res.render('contacts/write.html', {contact})
    })
}
exports.post_products_edit=(req,res)=>{
    models.Contacts.update({
        name : req.body.name,
        price:req.body.price,
        description: req.body.description,
    }, {
        where : {id : req.params.id}
    }).then(()=>{
        res.redirect('/contacts/products/detail/'+req.params.id);
    })
}

exports.get_products_delete=(req,res)=>{
    models.Contacts.destroy({
        where :{id: req.params.id}
    }).then(()=>{
        res.redirect('/contacts/products')
    })
}