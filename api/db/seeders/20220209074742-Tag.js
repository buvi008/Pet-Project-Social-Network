module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Tags', [
      {
        title: 'front End',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'back End',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'JS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'C++',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'NestJS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Bootstrap',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Express',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Sequelie',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'SQL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Postgres',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Material UI',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'react',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'redux',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Tags', null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
