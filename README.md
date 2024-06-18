  <div style="text-align: center">
  
  # Wallet Event Listener 💰
    
  </div>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
</p>

## Description

This project is a Event Listener to send requests to the Wallet API, the main purpose is to receive events of operations into the wallet balance and get information.
Based in NestJS, using EventEmitter and Axios.

## Business Rules

- Requests to the wallet can come from various channels;
  - Requests can be received a middleware or a webhook based on Event Listener and added to a queue for processing each event.
    (Wasn't able to finish this)

## Docker Container

Exposed in port 3040. Use - localhost:3040/event - to requests.

```bash
#To create the containers
$ docker compose up --build
```

## Running

```bash
$ npm install --legacy-peer-deps

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test:e2e
```

## Service Architeture

![Service Architeture](/public/service.png)

## Support

Nest is an MIT-licensed open source project. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
