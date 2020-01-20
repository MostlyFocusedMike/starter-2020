module.exports = (router) => {
    router.get('/:id', (req, res) => {
        const userId = req.params.id;
        console.log(`/users/${userId} hit!`);
        res.send({ id: userId, msg: `user ${userId} would go here.` });
    });
};
