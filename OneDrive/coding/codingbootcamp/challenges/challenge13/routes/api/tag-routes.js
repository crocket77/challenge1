const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model:Product,
      attributes:['product_name','price','stock','category_id'],
      through:Tag,
      as:'product_name'
    }
  }).then(data=>{
    if(!data){
      res.status(404).json({message:'no tags'})
      return;
    }
    res.json(data)
  })
  .catch(err=>res.status(500).json(err))
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id'],
      through: Tag,
      as: 'product_name'
    }
  })
    .then(data => {
      if(!data){
        res.status(404).json({ message: 'No tags in database with this id'})
        return;
      }
      res.json(data)
    })
    .catch(err => res.status(500).json(err))
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      if(!data){
        res.status(404).json({ message: 'No tag with this id to update'})
        return;
      }
      res.json(data)
    })
    .catch(err => res.status(500).json(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      if(!data){
        res.status(404).json({ message: 'No tag with this id to delete'})
        return;
      }
      res.json(data)
    })
    .catch(err => res.status(500).json(err))
});

module.exports = router;
