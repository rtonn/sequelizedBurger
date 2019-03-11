
module.exports = function(sequelize, DataTypes) {
  
  var Burger = sequelize.define("burger", {
    
      burger_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1],
              notEmpty: true}
          },
      
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: 0
      }, 
    });
  

  return Burger;
};