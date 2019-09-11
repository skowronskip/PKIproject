export default (sequelize, DataTypes) => {
  const League = sequelize.define('League', {
    name: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  League.associate = (models) => {
    League.hasMany(models.Team, {
      foreignKey: 'leagueId',
    })
  };
  return League;
};
