const puppeteer = require('puppeteer');

const scrapeNews = async() => {

  const url = "https://www.allkpop.com/";
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const newsList = [];

  for (let i = 0; i < 6; i++) {
    try {
      const [a] = await page.$x(
        `/html/body/div[4]/section/div[2]/div[1]/article[${i}]/div[1]/div/div[2]/div[1]/a`
      );
      const text = await a.getProperty("textContent");
      const title = await text.jsonValue();

      const [img] = await page.$x(
        `/html/body/div[4]/section/div[2]/div[1]/article[${i}]/div[1]/div/div[1]/a/img`
      );
      const src = await img.getProperty("src");
      const imgUrl = await src.jsonValue();

      newsList.push({ title, imgUrl })
    } catch (err) {
      console.log(err);
    }
  };

  browser.close();

  return newsList;
};

scrapeNews();

module.exports = {
  scrapeNews
};