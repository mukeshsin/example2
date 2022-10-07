// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const User = db.define('users', {
  // Define attributes
  firstName: {
    type: Sequelize.string
  },
  lastName: {
    type: Sequelize.string
  },
  email: {
    type: Sequelize.string
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model user
export default User;