const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

class ControllerUser {

    async createUser(request, response) {
        try {
            const { name, email, password } = request.body;

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({ name, email, password: hashedPassword });

            return response.status(201).json(newUser);

        } catch (error) {
            console.log(error)
            response.status(500).json({ error: 'Failed to create user' });
        }
    }

    async getUserById(request, response) {
        try {
            const { id } = request.params;
            const user = await User.findOne({ where: { id } });

            if (user) {
                const { password, ...userData } = user.toJSON();
                response.status(200).json(userData);
                // response.status(200).json(user);

            } else {
                response.status(404).json({ error: 'User not found' });
            }

        } catch (error) {
            console.log(error)
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async login(request, response) {
        try {
            const { email, password } = request.body;
            const user = await User.findOne({ where: { email } });

            if (!user) {
                return response.status(404).json({ error: 'User not found' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return response.status(401).json({ error: 'Invalid password' });
            }

            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
                expiresIn: '1h'
            });

            response.status(200).json({ token });

        } catch (error) {
            res.status(500).json({ error: 'Login failed' });
        }
    }
}

module.exports = ControllerUser;
