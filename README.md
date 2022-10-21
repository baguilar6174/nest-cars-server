<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

This Rest API allows CRUD of in-memory carts, contains the definitions and basic concepts used in Nest.

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

```bash
# You need populate the fake DB
# [post] - Populate data
http://localhost:3000/seed

# [get] - Get all cars
http://localhost:3000/cars

# [get] - Get car by id
http://localhost:3000/cars/<id>

# [post] - Create car
# body
# {
#     "brand": "Mazda",
#     "model": "6"
# }
http://localhost:3000/cars

# [patch] - Update car
# body
# {
#     "brand": "Mazda",
#     "model": "6"
# }
http://localhost:3000/cars/<id>

# [delete] - Delete car
http://localhost:3000/cars/<id>

```

## My process

### Built with

- Nest JS
- Typescript
- MongoDB

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
- DTOs

## Stay in touch

- Website - [www.bryan-aguilar.com](https://www.bryan-aguilar.com/)
- Medium - [baguilar6174](https://baguilar6174.medium.com/)
- LinkeIn - [baguilar6174](https://www.linkedin.com/in/baguilar6174)
