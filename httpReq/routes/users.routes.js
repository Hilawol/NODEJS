const express = require('express');
const router = express.Router();
let usersJson = require('../users.json');
const fs = require('fs');


const getById = (id) => usersJson.find(u => u.id === parseInt(id));

router.get('/', (req, res) => {
    return res.status(200).json({ users: usersJson })

}).get('/:id', (req, res) => {
    return res.status(200).json({ user: getById(req.params.id) })

}).post('/', (req, res) => {
    usersJson.push(req.body);
    fs.writeFileSync('./users.json', JSON.stringify(usersJson));
    return res.status(200).json({ success: "added user to db" });

}).put('/:id', (req, res) => {
    const { id } = req.params;
    const { capsule } = req.body;
    if (capsule > 0) {
        const user = usersJson.find(u => u.id == id);
        if (user) {
            user.caspule = capsule;
            fs.writeFileSync('./users.json', JSON.stringify(usersJson));
            return res.status(200).json({ success: "User updated" });
        }
        else res.status(204).send("error");
    } else res.status(204).send("error");

}).delete('/:id', (req, res) => {
    const { id } = req.params;
    usersJson = usersJson.filter(u => u.id !== parseInt(id));
    fs.writeFileSync('./users.json', JSON.stringify(usersJson));
    return res.status(200).json({ success: "User deleted" });
})

module.exports = router;
