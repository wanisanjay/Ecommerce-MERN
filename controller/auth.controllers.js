const bcrypt = require("bcrypt");
const { User,Role } = require("../model");

exports.signUp = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        const user = {
            userName: userName,
            email: email,
            password: bcrypt.hashSync(password, 8)
        }

        let roles = req.body.roles;
        if (!roles) {
            roles = ["user"];
        }

        const role_data = await Role.findAll({
            where: {
                name: roles
            }
        })

        const createdUser = await User.create(user);
        await createdUser.setRoles(role_data);
        res.status(201).send({message:"User has been successfully registered"});
    }
    catch (err) {
        res.status(500).send({ message: err.message || "Something went wrong" });
    }
}