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
});

TeamsModel.hasMany(MatchesModel, {
  foreignKey: 'awayTeam',
});

MatchesModel.belongsTo(TeamsModel, {
  foreignKey: 'home_team',
  as: 'teamHome',
});

MatchesModel.belongsTo(TeamsModel, {
  foreignKey: 'away_team',
  as: 'teamAway',
});

export default MatchesModel;
