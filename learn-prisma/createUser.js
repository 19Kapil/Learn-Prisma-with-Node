const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function createUser() {
 const newUser = await prisma.user.create({
   data: {
     name: 'Kapil Parajuli',
     email: 'teswwt@example.com',
   },
 });
 console.log( " New User Created :",newUser);

}
createUser()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})

//--for many set of users:

async function createUsers() {
    const findUser = await prisma.user.createMany({
      data: [
       { name:" Alice Wong",email:"test11@example.com"},
       { name:" Bob Wong",email:"test1@example.com"},
       { name:" John Doe",email:"test2@example.com"},
       { name:" Janew Doe",email:"test3@example.com"},
       { name:" John1 Doe",email:"test4@example.com"},
       { name:" John2 Doe",email:"test5@example.com"},
       { name:" John3 Doe",email:"test6@example.com"},
       { name:" John4 Doe",email:"test7@example.com"},
       { name:" John5 Doe",email:"test8@example.com"},
       { name:" John6 Doe",email:"test9@example.com"},
        
      ]
    });
    console.log( " User find :",findUser);
   
   }
   createUsers()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
