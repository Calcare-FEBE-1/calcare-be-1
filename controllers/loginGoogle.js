const models = require('../models');
const { User } = models;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { generateToken, verifyToken } = require("../middlewares");
const loginByGoogle = require("../middlewares/google.auth");


class UsersController {
static async loginByGoogle(req, res) {
    try {
        let { email, nama } = req.body;
        const users = new User({
            nama: nama,
            email: email,
        });
        const saved = await users.save();
        res.status(200).send(saved);
    } catch (error) {
        res.status(500).send(error);
    }
}

static async loginByGoogle(req, res) {
    try {
        let { email, nama , password} = req.body;
        const existUseremail = await User.findOne({ email: email });
        // let compare = bcrypt.compareSync(password, existUseremail.password);
        if (existUseremail) {
            const tokenUser = {
                _id: existUseremail._id,
                role: "user",
            };
            const createToken = generateToken(tokenUser);
            res.send({ message: "welcome", token: createToken });
        } else {
            User.create({
                nama: nama,
                email: email,

            })
                .then((result) => {
                    res.status(200).send({
                        message: "success",
                        result,
                    });
                })
                .catch((error) => {
                    console.log(error);
                    res.status(500).send({
                        message: "error",
                        error,
                    });
                });
        }
    } catch (e) {
        console.log(e);
        res.status(401).send();
    }
}
}

module.exports = UsersController;