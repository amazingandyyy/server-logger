<h1 align="center">
🗣️ server-logger
</h1>
<p align="center">
A simple server logger middleware.
</p>

<p align="center">
   <a href="https://github.com/amazingandyyy/server-logger/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/server-logger">
      <img src="https://circleci.com/gh/amazingandyyy/server-logger.svg?style=svg" />
   </a>
   <a href="https://www.npmjs.com/package/@amazingandyyy/server-logger">
      <img src="https://badge.fury.io/js/%40amazingandyyy%2Fserver-logger.svg" />
   </a>
</p>

> ZERO dependencies

## Installation

```shell
$ npm i --save @amazingandyyy/server-logger
```

## Usage

```javascript
const NodeServer = require('@amazingandyyy/node-server')
const logger = require('@amazingandyyy/parser-logger')

app.use(logger('dev'))

app.on('get', '/', (req, res) => {
  res.send(200)
})

app.start({ port: '4000' })
```


## Messages

```
21:29:42  404  GET /fafafa
21:29:46  200  GET /
21:29:47  200  GET /
21:29:42  500  GET /fafafa?fad
21:29:49  200  GET /
```

## License

MIT
