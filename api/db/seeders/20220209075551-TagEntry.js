module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('TagEntries', [
      {
        tag_id: 1,
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_id: 1,
        project_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_id: 4,
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_id: 5,
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_id: 7,
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_id: 9,
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_id: 13,
        project_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_id: 10,
        project_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_id: 1,
        project_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('TagEntries', null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
