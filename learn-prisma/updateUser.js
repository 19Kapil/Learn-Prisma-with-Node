const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    const updateUser = await prisma.user.update({
      where: {
        id: 4,
      },
      data: {
        name: "Hello Budy",
      },
    });
    console.log( " User update :",updateUser);
   }

   main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


  //--for many user
async function main(updateuser) {
  const updateUser = await prisma.user.updateMany({
    where: {
      email: {
        in: updateuser,
      }, // Use the 'in' condition to match multiple emails
    },
    data: {
      name: "Hello Budy",
    },
  });
  console.log(" User update :", updateUser);
}

main(["test1@example.com", "test11@example.com"])
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
