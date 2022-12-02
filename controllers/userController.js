const models = require("../models");
const { User } = models;

module.exports = {
  // Get all user, diakses oleh admin
  getAllUser: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json({
        msg: "Success Get All User",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        msg: "Internal Server Error",
        error: error,
      });
    }
  },
  // Untuk mengambil data user by id, diakses oleh user
  getUserByID: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    res.status(200).json({
      msg: "Success Get User by ID",
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
        msg: "Success Update Data User",
      });
    } catch (error) {
      res.status(500).json({
        msg: "Internal Server Error",
        error: error,
      });
      console.log("Internal Server Error");
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
  //       msg: "User Deleted",
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
};
