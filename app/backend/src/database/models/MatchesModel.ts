import { Model, DataTypes } from 'sequelize';
import db from '.';
import TeamsModel from './TeamsModel';

class MatchesModel extends Model {
  declare id: number;
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeam: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

MatchesModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: DataTypes.INTEGER,
  homeTeamGoals: DataTypes.INTEGER,
  awayTeam: DataTypes.INTEGER,
  awayTeamGoals: DataTypes.INTEGER,
  inProgress: DataTypes.BOOLEAN,
}, {
  tableName: 'matches',
  timestamps: false,
  underscored: true,
  sequelize: db,
});

TeamsModel.hasMany(MatchesModel, {
  foreignKey: 'homeTeam',
  as: 'teamHome',
});

TeamsModel.hasMany(MatchesModel, {
  foreignKey: 'awayTeam',
  as: 'teamAway',
});

MatchesModel.belongsTo(TeamsModel, {
  foreignKey: 'homeTeam',
  as: 'teamHome',
});

MatchesModel.belongsTo(TeamsModel, {
  foreignKey: 'awayTeam',
  as: 'teamAway',
});

export default MatchesModel;
