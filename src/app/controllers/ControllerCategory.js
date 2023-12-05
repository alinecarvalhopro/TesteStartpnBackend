const Category = require('../models/category');

class ControllerCategory {

    async createCategory(request, response) {
        try {
            const { name } = request.body;

            const category = await Category.create({ name });

            return response.status(201).json(category);

        } catch (error) {
            console.log(error)
            response.status(500).json({ error: 'Failed to create category' });
        }
    }

    async getCategoryById(request, response) {
        try {
            const { id } = request.params;
            const category = await Category.findOne({ where: { id } });

            if (category) {
                response.status(200).json(category);

            } else {
                response.status(404).json({ error: 'Category not found' });
            }

        } catch (error) {
            console.log(error)
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getAllCategories(request, response) {
        try {
            const categories = await Category.findAll();

            if (categories.length > 0) {
                response.status(200).json(categories);
            } else {
                response.status(404).json({ error: 'No categories found' });
            }

        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

}

module.exports = ControllerCategory;
