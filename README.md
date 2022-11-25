<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

This Rest API allows CRUD of cars using Mongo DB, contains the definitions and basic concepts used in Nest.

## Installation

Clone this repository

```bash
git clone https://github.com/baguilar6174/nest-cars-server.git
```

Install dependencies

```bash
$ yarn
```

You need Nest CLI

```bash
$ npm i -g @nestjs/cli
```

Configure and start Database

```bash
$ docker-compose up -d
```

Clone `.env.template` file and rename to `.env`

Complete environment variables

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Endpoints

You can find all endpoints here [Postman Collention](./media/car-dealership.postman_collection.json)

```
# Populate DB

http://localhost:3000/api/v1/seed
```

**Production Build**

1. Create `.env.prod` file
2. Complete prod variables
3. Create new image

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

4. Run docker images

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```

## My process

### Built with

- Nest JS
- Typescript
- MongoDB
- Docker
- Docker Compose

### What I learned

- Nest with TypeScript
- Restful APIS robust and secure
- Data validations and types
- Core building blocks
  - Services
  - Controllers
  - Providers
  - Decorators
  - Gateways
  - Guards
  - Interceptors
  - Exception Filters
  - Modules
- Nest CLI
- Restful endpoints
- DTOs (Data Transfer Object)
- Class Validator
- Class Transformer
- Follow the DRY principle (Don't repeat yourself)
- Some useful Class Validator decorators
- Common errors when using linked modules
- Problems with dependency injection of external modules
- Docker and Docker Compose
- Connecting container to filesystem (to keep database data)
- Schemas
- Models
- SEED to populate database
- Results pagination
- DTOs for Query parameters
- DTO transformations
- Dockerization (Dockerfile)
- Environment variables
- Configuration Module
- Deploys

## Stay in touch

- Website - [www.bryan-aguilar.com](https://www.bryan-aguilar.com/)
- Medium - [baguilar6174](https://baguilar6174.medium.com/)
- LinkeIn - [baguilar6174](https://www.linkedin.com/in/baguilar6174)
