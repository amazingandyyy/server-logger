const logger = (mode = 'dev') => {
  const t = new Date()
  const timestamp = t.toLocaleTimeString('en-US', { hour12: false })
  switch (mode) {
    case 'dev':
      return (req, res, next) => {
        res.on('finish', () => {
          let color = '\x1b[1m'
          const resetColor = '\x1b[0m'
          if (res.statusCode <= 300 && res.statusCode > 100)color = '\x1b[32m'
          if (res.statusCode > 400) color = '\x1b[33m'
          if (res.statusCode >= 500) color = '\x1b[31m'
          console.info(timestamp, color, res.statusCode, resetColor, req.method, req.url)
        })
        next()
      }
    default:
      return (req, res, next) => {
        console.info(timestamp, res.statusCode, req.method, req.url)
        next()
      }
  }
}

module.exports = logger
