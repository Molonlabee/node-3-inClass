function addDog(req, res) {
    const { color, breed, name } = req.body;
    const db = req.app.get('db');
    //massive is running sql file addDog like a function
    db.addDog(color, breed, name).then(()=> {
        res.sendStatus(200);
    }).catch(err => {
        res.statues(500).json(err);
    });

    function getDogs(req, res) {
        const db = req.app.get('db');
        db.getDogs().then(allDogs => {
            res.status(200).json(allDogs);
        });
    }
}
module.exports = {
    addDog
    getDogs
};