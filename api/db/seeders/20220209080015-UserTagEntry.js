module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('UserTagEntries', [
      {
        tag_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_id: 3,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_id: 4,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_id: 7,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_id: 2,
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_id: 11,
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_id: 13,
        user_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('UserTagEntries', null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
