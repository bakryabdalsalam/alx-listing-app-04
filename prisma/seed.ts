import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Create a test property
  const property = await prisma.property.create({
    data: {
      title: 'Test Property',
      description: 'A beautiful test property',
      price: 100000,
      location: 'Test Location'
    },
  })
  
  console.log('Created test property:', property)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
