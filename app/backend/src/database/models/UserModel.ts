import { Model, DataTypes } from 'sequelize';
import db from '.';

class UserModel extends Model {
  declare id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

UserModel.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
    sequelize: db,
  },
);

export default UserModel;
