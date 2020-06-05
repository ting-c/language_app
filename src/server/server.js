const express = require('express');
const app = express();
const port =  4000;
const bodyParser = require('body-parser');
const { scrapeNews } = require('./scrapers');

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/server", async (req, res) => {
  const news = await scrapeNews();
  res.send(news);
});

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
