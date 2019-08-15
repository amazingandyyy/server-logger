const logger = (mode='dev') =>{
  switch (mode) {
    case 'dev':
      return (req, res, next) => {
        const now = process.hrtime();
        res.on('finish', () => {
          const current = process.hrtime()
          const period = ((current[1] - now[1])/10000000).toFixed(3);
          const t = new Date();
          const timestamp = t.toLocaleTimeString('en-US', {hour12: false});
          let color = "\x1b[1m"
          const resetColor = "\x1b[0m"
          if(res.statusCode<=300 && res.statusCode>100)color = "\x1b[32m";
          if(res.statusCode>400) color = "\x1b[33m";
          if(res.statusCode>=500) color = "\x1b[31m";
          console.info(timestamp, color, res.statusCode, resetColor, req.method, req.url)
        })
        next();
      }
      break;
    default:
      next();
      break;
  }
}

module.exports = logger;
