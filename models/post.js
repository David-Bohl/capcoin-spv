module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    slug: {
      type: DataTypes.STRING,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Post.associate = (models) => {
    models.Post.belongsTo(models.User);
  }

  return Post;
};
