const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function deleteUser() {
  const deleteUser = await prisma.user.delete({
    where: {
      email: "test1@example.com",
    },
  });
  console.log(" User delet :", deleteUser);
}
deleteUser()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

//--for many user

async function deleteUser(userdelete) {
  const findUser = await prisma.user.deleteMany({
    where: {
      name: {
        in: userdelete,
      },
    }, // Use the 'in' condition to match multiple emails
  });
  console.log(" User find :", findUser);
}

//deleteUser(["test1@example.com", "test11@example.com"])
deleteUser(["John Doe","Hello Budy"])

  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
