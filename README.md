# typesafe-api-clients-demo

[![Build Status](https://travis-ci.org/jackkoppa/typesafe-api-clients-demo.svg?branch=master)](https://travis-ci.org/jackkoppa/typesafe-api-clients-demo)

## In conjunction with

### Presentation

* Slides: https://docs.google.com/presentation/d/1foL-tGd4PKQzhX7-etfV86ezgF74Z9QfSpIO-ivEe2o
* Meetup: https://www.meetup.com/Vue-DC/events/266086862/

### Demo API

* Repo: https://github.com/jackkoppa/gs-spring-boot 
* Deployment: https://typesafe-api-demo-java.herokuapp.com/

Let's learn about type-safe APIs! Please take a look at the code, code comments, & presentation slides. Then feel free to reach out with any & all questions to [`@JackPKoppa`](https://twitter.com/jackpkoppa); happy to continue to update this repo with further examples & documentation.

View the app: http://typesafe-api-clients-demo.jackkoppa.com

## Local Development

### Setup
```
npm install
```

### Compile and hot-reload for development
```
npm run serve
```

### Generate latest codegen files for TypeScript API Clients
```
npm run generate-api-clients
```

To try out additional OpenAPI/Swagger documented APIs, add them to `build > generateApiClients.js`, then re-run `npm run generate-api-clients`
