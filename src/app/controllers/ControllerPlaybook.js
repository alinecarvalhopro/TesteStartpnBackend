const Playbook = require('../models/playbook');

class ControllerPlaybook {

    async createPlaybook(request, response) {
        try {
            const { name, description, categoryId, userId } = request.body;

            const playbook = await Playbook.create({ name, description, userId, categoryId });

            return response.status(201).json(playbook);

        } catch (error) {
            console.log(error)
            response.status(500).json({ error: 'Failed to create playbook' });
        }
    }

    async getPlaybookById(request, response) {
        try {
            const { id } = request.params;
            const playbook = await Playbook.findOne({ where: { id } });

            if (playbook) {
                response.status(200).json(playbook);

            } else {
                response.status(404).json({ error: 'Playbook not found' });
            }

        } catch (error) {
            console.log(error)
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getPlaybooksByUser(request, response) {
        try {
            const { userId } = request.params;
            const playbooks = await Playbook.findAll({ where: { userId } });

            if (playbooks.length > 0) {
                response.status(200).json(playbooks);
            } else {
                response.status(404).json({ error: 'No playbooks found for this user' });
            }
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updatePlaybook(request, response) {
        try {
            const { id } = request.params;
            const { name, description, categoryId, userId } = request.body;

            const playbook = await Playbook.findOne({ where: { id } });

            if (!playbook) {
                return response.status(404).json({ error: 'Playbook not found' });
            }

            if (name) {
                playbook.name = name;
            }
            if (description) {
                playbook.description = description;
            }
            if (categoryId) {
                playbook.categoryId = categoryId;
            }
            if (userId) {
                playbook.userId = userId;
            }

            await playbook.save();

            return response.status(200).json(playbook);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: 'Failed to update playbook' });
        }
    }
}

module.exports = ControllerPlaybook;
