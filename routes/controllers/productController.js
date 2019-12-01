const db =require('../../db/');


exports.displayProduct = (req,res) => {

  db.query('select * from condat.product'
           ,(error, results)=>{
             if (error) {
                throw error
             }
             res.send(results.rows)
            }
         );
};



exports.createProduct =  (req,res) => {

  const {product_name} = req.body

  db.query('insert into condat.product(product_name) \
  values($1) RETURNING *'
  ,[product_name]
  ,(error, results)=>{
    if (error) {
      throw error
    }
    res.send(results.rows)
  });

};
