const Contact = require('../models/contact');

const home_get = (req, res) => {
    res.render('index');
};
const home_test_get = (req, res) => {
    res.render('indexTest');
};

const earn_get = (req, res) => {
    res.render('earn');
};

const profile_get = (req, res) => {
    res.render('profile');
};
const withdraw_get = (req, res) => {
    res.render('withdraw');
};
const grp_withdraw_get = (req, res) => {
    res.render('groupwithdraw');
};

module.exports = { 
    home_get, 
    earn_get, 
    profile_get, 
    withdraw_get, 
    grp_withdraw_get, 
    home_test_get
};