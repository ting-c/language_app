const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { scrapeNews } = require("./scrapers");

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
	const news = await scrapeNews();
	res.send(news);
});

// app.listen(port, () =>
// 	console.log(`App listening at http://localhost:${port}`)
// );

module.exports = app;
