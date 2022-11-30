import { Model, DataTypes } from 'sequelize';
import db from '.';

class TeamsModel extends Model {
  declare id: number;
  declare teamName: string;
}

TeamsModel.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    teamName: DataTypes.STRING,
  },
  {
    tableName: 'teams',
    timestamps: false,
    underscored: true,
    sequelize: db,
  },
);

export default TeamsModel;
