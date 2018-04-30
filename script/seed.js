const db = require('../server/db')
const {User} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})

  const users = await Promise.all([
    User.create({email: 'kate@email.com', password: '123'}),
    User.create({email: 'ras@email.com', password: '123'})
  ])

  console.log(`seeded ${users.length} users successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...')
