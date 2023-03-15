const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
const router = Router();

router.post(
    '/register', 
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimum password length is 6 symbols').isLength({min: 6})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: errors.array(),
                    message: 'Incorrect data while registration'
                })
            }
            
            const { email, password } = req.body;

            const candidate = await User.findOne({email});

            if (candidate) {
                return res.status(400).json({message: 'Such user already exists'});
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({email, password: hashedPassword});

            await user.save();

            res.status(201).json({message: 'User is registered'});

        } catch(e) {
            res.status(500).json({message: 'Something went wrong, try one more time'})
        }
    }
);

router.post(
    '/login', 
    [
        check('email', 'Enter correct email').normalizeEmail(). isEmail(),
        check('password', 'Enter password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: errors.array(),
                    message: 'Incorrect data while login'
                })
            }
            
            const { email, password } = req.body;
            
            const user = await User.findOne({email});

            if (!user) {
                return res.status(400).json({message: 'User not found'});
            }
            
            const isMatch = await bcrypt.compare(password, user.password);
            
            if (!isMatch) {
                return res.status(400).json({message: 'Wrong email or password'});
            }
            
            const token = jwt.sign(
                { userId: user.id},
                config.get('jwtSecret'),
                { expiresIn: '1h'}
            );

            res.json({token, userId: user.id});
            
        } catch(e) {
            res.status(500).json({message: 'Something went wrong, try one more time'});
        }
    }
);

module.exports = router;