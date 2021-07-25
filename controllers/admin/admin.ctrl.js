
const models = require('../../models')

exports.get_products =async ( _ , res) => {
    // res.render( 'admin/products.html' , 
    //     { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    // );
   
   try{
    const products = await models.Products.findAll();
    res.render('admin/products.html', {products : products})
   }catch(err){
       console.log(err)
   }
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = async( req , res ) => {

    console.log(req.body)
    //res.send(req.body);
    await models.Products.create(req.body)
    res.redirect('/admin/products')/*메인 페이지로 이동 */
        
}

exports.get_products_detail = async(req,res)=>{
    //req.params.id
    const product = await models.Products.findByPk(req.params.id)
        res.render('admin/detail.html', {product :product})
    }


exports.get_products_edit=(req,res)=>{
    models.Products.findByPk(req.params.id).then((product)=>{
        res.render('admin/write.html', {product})
    })
}
exports.post_products_edit= async(req,res)=>{
    await models.Products.update(req.body, {
        where : {id : req.params.id}
    })
        res.redirect('/admin/products/detail/'+req.params.id);
}

exports.get_products_delete=(req,res)=>{
    models.Products.destroy({
        where :{id: req.params.id}
    }).then(()=>{
        res.redirect('/admin/products')
    })
}