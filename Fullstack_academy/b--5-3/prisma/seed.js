const prisma = require("../prisma");

const seed = async () => {
  for (let i = 1; i <= 10; i++) {
    await prisma.puppy.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `puppy ${i}`,
        breed: `breed ${i % 3}`,
      },
    });
  }
};
seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    prosses.exit(1);
  });
