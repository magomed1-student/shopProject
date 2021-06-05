const Categories = require('../models/Category')

class categoriesController {

  async getCategories (req, res) {
    try {
      const categories = await Categories.find({})
      res.json(categories)
    }catch (e) {
      console.log(e.message)
    }
  }


  async postCategories (req, res) {
    try {
      const categories = new Categories ({name:req.params.name})
      await categories.save()
      res.json(categories)
    }catch (e) {
      console.log(e.message)
    }
  }

  async deleteCategories(req, res) {
    try {
      const categories = await Categories.findOneAndDelete({_id: req.body.id})
      res.json(categories)
    }catch (e) {
      console.log(e.message)
    }
  }

  async patchCategoriesById (req, res) {
    try {
      const id = req.params.id
      const {name} = req.body.name
      const categories = await Categories.findByIdAndUpdate( id, {name}, {new:true})
      res.json(categories)
    }catch (e) {
      console.log(e.message)
    }
  }

}

module.exports = new categoriesController()