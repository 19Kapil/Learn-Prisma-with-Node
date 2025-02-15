const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function finduser(userId) {
        const findUser = await prisma.user.findUnique({
          where: {
            id: userId,
            //used id or email for findUnique becuase id or emailare unique
          },
        });
        console.log( " User find :",findUser);
       }
 finduser(5)
.then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})


      // --- for many set of users:
async function finduser(userId) {
    const findUser = await prisma.user.findMany({
      where: {
        id: userId,  
      },
    });
    console.log( " User find :",findUser);
   }

finduser([1,4,8,9])
.then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})