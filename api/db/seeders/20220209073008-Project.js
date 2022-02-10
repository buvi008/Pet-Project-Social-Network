module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Projects', [
      {
        title: 'TODOLIST',
        description: 'TODOLIST',
        short_description: 'TODOLIST',
        creator_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Тоже TODOLIST',
        description: 'Тоже TODOLIST',
        short_description: 'Тоже TODOLIST',
        creator_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Тоже TODOLIST, но есть один нюанс',
        description: 'Тоже TODOLIST, но есть один нюанс',
        short_description: 'Тоже TODOLIST, но есть один нюанс',
        creator_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Projects', null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
