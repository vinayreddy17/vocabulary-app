






const getOneProduct = async(req,res)=>{
    let id= req.params.id
      let products = await Product.findone({where:{id:id}})
      client.set(products);
      res.status(200).send(products)
  }