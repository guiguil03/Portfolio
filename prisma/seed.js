// @ts-check
import { PrismaClient } from '../generated/prisma/index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lire le fichier JSON manuellement
const portfolioDataPath = path.join(__dirname, '../src/data/portfolio-data.json');
const portfolioData = JSON.parse(fs.readFileSync(portfolioDataPath, 'utf8'));

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Clean up existing data
  await prisma.project.deleteMany();
  await prisma.technology.deleteMany();
  await prisma.skill.deleteMany();

  // Seed skills
  console.log('Seeding skills...');
  for (const skill of portfolioData.skills) {
    await prisma.skill.create({
      data: {
        name: skill.name,
        icon: skill.icon,
        color: skill.color,
      },
    });
  }

  // Seed technologies and projects
  console.log('Seeding technologies and projects...');
  for (const project of portfolioData.projects) {
    // Create technologies if they don't exist
    const techPromises = project.tech.map(async (techName) => {
      return prisma.technology.upsert({
        where: { name: techName },
        update: {},
        create: { name: techName },
      });
    });

    const technologies = await Promise.all(techPromises);

    // Create project with technologies
    await prisma.project.create({
      data: {
        title: project.title,
        description: project.description,
        image: project.image,
        github: project.github,
        demo: project.demo,
        tech: {
          connect: technologies.map((tech) => ({ id: tech.id })),
        },
      },
    });
  }

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
