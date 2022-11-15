const withAuth = (req, res, next) => {
    // If the user is not logged in it will re-direct the user to login page.
    if(!req.session.user_id) {
        res.redirect('/login');
    // If the user is logged in it will move to the next page.
    } else {
        next();
    }
};

module.exports = withAuth;