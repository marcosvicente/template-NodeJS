module.exports = (sequelize, DataTypes) =>{

    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
    });

    return User;
};
