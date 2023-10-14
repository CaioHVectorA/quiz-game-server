import { Pontuation, PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()
async function run() {
    const promises = []
    for (let index = 0; index < 18; index++) {
        promises.push(prisma.user.create({
            data: {
                username: faker.person.firstName(),
                password: 'senhaqualquer',
            }
        }))
    }
    const users = await Promise.all(promises)
    const pontuationsCreate = []
    users.forEach(async (newUser) => {    
        const types = ['MATH', 'NATURE', 'SOCIAL', 'OTHERS']
        const promises = types.map(async (t) => {
            await prisma.pontuation.create({
                data: {
                    userId: newUser.id,
                    quantity: 0,
                    type: t
                }
            })
        })
        await Promise.all(promises)
    })
    const pontuations = await prisma.pontuation.findMany()
    const pontuationsPromises: Promise<Pontuation>[] = []
    pontuations.forEach(pontuation => {
        pontuationsPromises.push(
            prisma.pontuation.update({
                where: { id: pontuation.id },
                data: { quantity: Math.floor(Math.random() * 60) }
            })
            )
        })
        await Promise.all(pontuationsPromises)
}

run().then(async (response) => {
    await prisma.$disconnect()
    console.log('Tudo feito!')
})