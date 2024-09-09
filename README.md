# Build a Complete Project Management Dashboard

[![Tutorial Video](https://img.youtube.com/vi/KAV8vo7hGAo/0.jpg)](https://www.youtube.com/watch?v=KAV8vo7hGAo)

This repository hosts the code for a comprehensive tutorial on building a Project Management Dashboard using Next.js, Node.js, and AWS services.
Follow the [video tutorial on YouTube](https://www.youtube.com/watch?v=KAV8vo7hGAo) for detailed setup, configuration, and deployment instructions.

## Join Our Community

For discussion and support for this specific app, join our [Discord community](https://discord.com/channels/1070200085440376872/1082900634442940416/threads/1282730219488280576).

## Technology Stack

- **Frontend**: Next.js, Tailwind CSS, Redux Toolkit, Redux Toolkit Query, Material UI Data Grid
- **Backend**: Node.js with Express, Prisma (PostgreSQL ORM)
- **Database**: PostgreSQL, managed with PgAdmin
- **Cloud**: AWS EC2, AWS RDS, AWS API Gateway, AWS Amplify, AWS S3, AWS Lambda, AWS Cognito

## Getting Started

### Prerequisites

Ensure you have these tools installed:

- Git
- Node.js
- npm (Node Package Manager)
- PostgreSQL ([download](https://www.postgresql.org/download/))
- PgAdmin ([download](https://www.pgadmin.org/download/))

### Installation Steps

1. Clone the repository:
   `git clone [git url]`
   `cd project-management`

2. Install dependencies in both client and server:
   `cd client`
   `npm i`
   `cd ..`
   `cd server`
   `npm i`

3. Set up the database:
   `npx prisma generate`
   `npx prisma migrate dev --name init`
   `npm run seed`

4. Configure environment variables:

- `.env` for server settings (PORT, DATABASE_URL)
- `.env.local` for client settings (NEXT_PUBLIC_API_BASE_URL)

5. Run the project
   `npm run dev`

## Additional Resources

### Code Repositories and Configuration Files

- [Complete project code on GitHub](https://github.com/ed-roh/project-management)
- [Tailwind CSS configuration](https://github.com/ed-roh/project-management/blob/master/client/tailwind.config.ts)
- [Redux Toolkit setup](https://github.com/ed-roh/project-management/blob/master/client/src/app/redux.tsx)
- [Database seed files](https://github.com/ed-roh/project-management/tree/master/server/prisma/seedData)
- [Image files](https://github.com/ed-roh/project-management/tree/master/client/public)
- [globals.css file (to copy for Gantt charts)](https://github.com/ed-roh/project-management/blob/master/client/src/app/globals.css)
- [AWS EC2 Instruction file](https://github.com/ed-roh/project-management/blob/master/server/aws-ec2-instructions.md)

### Diagrams and Models

- [Data model diagram](https://lucid.app/lucidchart/877dec2c-db89-4f7b-9ce0-80ce88b6ee37/edit)
- [AWS architecture diagram](https://lucid.app/lucidchart/62c20695-d936-4ee7-9a53-ceef7aef8127/edit)
- [AWS Cognito flow diagram](https://lucid.app/lucidchart/9e17e28e-6fe5-41df-b04b-b378fa21eb8f/edit)

### Database Management Commands

- Command for resetting ID in database:
  ```sql
  SELECT setval(pg_get_serial_sequence('"[DATA_MODEL_NAME_HERE]"', 'id'), coalesce(max(id)+1, 1), false) FROM "[DATA_MODEL_NAME_HERE]";
  ```
