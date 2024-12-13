const express = require('express');
const { getIndexPage} = require('../controllers/pageController');
const { getAddPage } = require('../controllers/pageController');
const { sendEmail } = require('../controllers/pageController');

const router = express.Router();

router.get('/', getIndexPage);
router.get('/add', getAddPage);
router.route('/contact').post(sendEmail);
module.exports = router;