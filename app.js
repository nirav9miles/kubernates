const express = require('express');
const cookieParser = require('cookie-parser');

const os = require( 'os' );
const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {

    const podName = process.env.HOSTNAME || process.env.HOST;

console.log(`Pod Name: ${podName}`);
console.log('Host:' , os.hostname());

  // Access cookies using req.cookies
  const cookies = req.cookies;
  console.log('Cookies:', cookies);

  res.send(JSON.stringify({
    pod: ${podName},
    host: os.hostname(),
    cookie: JSON.stringify(cookies)
  }));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
