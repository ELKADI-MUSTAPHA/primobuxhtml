const router = require('express').Router();
const contactController = require('../controllers/contactController');

router.get('/index', contactController.home_get);
router.get('/indexTest', contactController.home_test_get);
router.get('/earn', contactController.earn_get);
router.get('/profile', contactController.profile_get);
router.get('/withdraw', contactController.withdraw_get);
router.get('/groupwithdraw', contactController.grp_withdraw_get);

module.exports = router;