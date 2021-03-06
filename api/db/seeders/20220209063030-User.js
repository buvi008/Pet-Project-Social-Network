module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        avatarImg: '',
        name: 'Джон',
        lastname: 'Дориан',
        email: 'jd@gmail.com',
        password: '123',
        status: 'free',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatarImg: '',
        name: 'Антон',
        lastname: 'Антонов',
        email: 'ant@gmail.com',
        password: '123',
        status: 'standart',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatarImg: '',
        name: 'Магомед',
        lastname: 'Магомедов',
        email: 'maga@gmail.com',
        password: '123',
        status: 'standart',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatarImg: '',
        name: 'Максим',
        lastname: 'Максимов',
        email: 'max@gmail.com',
        password: '123',
        status: 'gold',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatarImg: '',
        name: 'Антонио',
        lastname: 'Маргарэйти',
        email: '123@gmail.com',
        password: '123',
        status: 'free',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatarImg: '',
        name: 'Стефано',
        lastname: 'Алигафрено',
        email: 'Ali_Go_Friend@gmail.com',
        password: '123',
        status: 'cretin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatarImg: '',
        name: 'Тарас',
        lastname: 'Бульбов',
        email: 'biba@gmail.com',
        password: '123',
        status: 'standart',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
