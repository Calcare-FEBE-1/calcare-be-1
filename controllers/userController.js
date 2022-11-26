const models = require('../models');
const { User } = models;


module.exports = {

    getAllUser: async (req, res) => {
      const users = await User.findAll()
      res.json({
        message:"success get user data",
        data: users
      })
    },

    getUserByID: async (req, res) => {
      const { id } = req.params
      const user = await User.findByPk(id);

      res.json({
        message: "success get data by id",
        data: user
      })
    },
    
    deleteUserByID: async (req, res) => {
      try {
        await User.destroy({
          where: {
            id: req.params.id
          }
        });
        res.json({
          "message": "User Deleted"
        });
      } catch (err) {
        console.log(err);
      }
      
    },
    updateUserByID: async (req, res) => {
      try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Update"
        });
    } catch (err) {
        console.log(err);
    }
    },
  };