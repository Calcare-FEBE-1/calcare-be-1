const models = require("../models");
const { User } = models;

module.exports = {
  // Get all user, diakses oleh admin
  getAllUser: async (req, res) => {
    const users = await User.findAll();
    res.json({
      message: "success get user data",
      data: users,
    });
  },
  // Untuk mengambil data 1 user
  getUserByID: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    res.json({
      message: "success get data by id",
      data: user,
    });
  },
  // Untuk update user profil melalui role user
  updateUserByID: async (req, res) => {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.json({
        message: "User Update",
      });
    } catch (err) {
      console.log(err);
    }
  },
  // deleteUserByID: async (req, res) => {
  //   try {
  //     await User.destroy({
  //       where: {
  //         id: req.params.id,
  //       },
  //     });
  //     res.json({
  //       message: "User Deleted",
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
};
