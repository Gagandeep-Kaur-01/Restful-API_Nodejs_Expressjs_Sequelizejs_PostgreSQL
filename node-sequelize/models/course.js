'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Association here
      Course.belongsToMany(models.Student, {
        through: 'StudentCourse',
        as: 'students',
        foreignKey: 'course_id'
      });
      Course.belongsTo(models.Lecturer, {
        foreignKey: 'lecturer_id',
        as: 'lecturer'
      });
    }
  };
  Course.init({
    Lecturer_id: DataTypes.INTEGER,
    Course_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};