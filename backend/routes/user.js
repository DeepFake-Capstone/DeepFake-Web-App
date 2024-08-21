const express = require('express');
const zod = require('zod');
const router = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require('../config');
const { User } = require('../Db'); // Assuming User model is defined in Db.js

// Middleware for authentication
const { authMiddleware } = require('../middleware');

// Zod schema for signup request body validation
const signupBody = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string()
});

// Signup Route
router.post("/signup", async (req, res) => {
    const { success, error } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Invalid input. Please check your data."
        });
    }

    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken"
        });
    }

    const user = await User.create({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
    });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    return res.json({
        message: "User created successfully",
        token: token
    });
});

// Zod schema for signin request body validation
const loginBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

// Signin Route
router.post('/signin', async (req, res) => {
    const { success } = loginBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Invalid input"
        });
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        return res.json({
            token: token
        });
    }

    return res.status(411).json({
        message: "Error while logging in. Invalid credentials."
    });
});

module.exports = router;
