const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

// Register User
const registerUser = async (name, email, password) => {
    const userExists = await User.findOne({ email });

    if (userExists) {
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        };
    } else {
        throw new Error('Invalid user data');
    }
};

// Authenticate User
const authenticateUser = async (email, password) => {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        };
    } else {
        throw new Error('Invalid email or password');
    }
};

module.exports = {
    generateToken,
    registerUser,
    authenticateUser
};
