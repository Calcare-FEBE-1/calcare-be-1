const models = require('../models');
const { User } = models;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const env = require('dotenv');
const {res_error, res_success} = require('../Response')
// env.config();

const register = async (req, res) => {
    const { nama, email, password, tinggi_badan, berat_badan, umur, jenis_kelamin } = req.body;
    if(password !== password) return res.status(400).json({msg: "Password salah"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await User.create({
            nama: nama,
            email: email,
            password: hashPassword,
            tinggi_badan: tinggi_badan,
            berat_badan:berat_badan,
            umur:umur,
            jenis_kelamin:jenis_kelamin
        });
        res.json({msg: "Register Berhasil"});
    } catch (error) {
        console.log(error);
    }
}
 

const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({ email }).lean();

        if(!user)  res_error(res, 400, "400 Bad Request", "Your username or password is invalid")

        if(await bcrypt.compare(password, user.password)){
         
            
            return res_success(res, 200, "200 OK", "You was login", token)
        }

    } catch (error) {
        if(error) res_error(res, 500, "500 Internal Server Error", error.message)
    }
}


module.exports = {register, login};