export default (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    leagueId: DataTypes.INTEGER
  }, {});
  Team.associate = (models) => {
    Team.belongsTo(models.League, {
      foreignKey: 'leagueId',
      onDelete: 'CASCADE'
    })
  };
  return Team;
};
