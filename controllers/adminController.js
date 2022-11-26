const models = require('../models');
const { Admin } = models;


module.exports = {
    getAllAdmin: async (req, res) => {
    const admins = await Admin.findAll()
    res.json({
      message:"success get data",
      data: admins
    }) 
    },

    getAdminByID: async (req, res) => {
      const { id } = req.params
      const admin = await Admin.findByPk(id);

      res.json({
        message: "success get data admin by id",
        data: admin
      })
    },
    deleteAdminByID: async (req, res) => {
      try {
        await Admin.destroy({
          where: {
            id: req.params.id
          }
        });
        res.json({
          "message": "Admin Deleted"
        });
      } catch (err) {
        console.log(err);
      }
      
    },
    updateAdminByID: async (req, res) => {
      try {
        await Admin.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Admin Update"
        });
    } catch (err) {
        console.log(err);
    }
      
    },
  };