const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our user model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // define an id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be any duplicate email values in this table
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE  (https://sequelize.org/v5/manual/models-definition.html#configuration)

        //pass in our imported sequelize connection 
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;