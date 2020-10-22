const express = require('express');
const router = express.Router();
const { forwardAuthenticated } = require('../config/auth');

router.get('/', forwardAuthenticated, async (req, res) => {
    try {
        res.render('Resident');
    } catch(err) {
        req.flash('error', 'حدث خطأ ما بالسيرفر');
        res.redirect('/');
    }
 })
 

module.exports = router;