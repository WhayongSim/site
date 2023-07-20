const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;
const fs = require("fs");

const getHtml = async () => {
  try {
    return await axios.get("https://visla.kr/author/whayong/");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
	  
    const $bodyList = $("div#upper-post").children("article");

    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find('div.card-content .entry-title').text(),
          url: $(this).find('a').attr('href'),
          image_url: $(this).find('div.post-bg').attr('style').split('background-image:url(')[1].split(')')[0],
          date: $(this).find('.card-date').text()
      };
    });

    const data = ulList.filter(n => n.title);
	  fs.writeFileSync("test.json", JSON.stringify(data));
    return data;
    
  })
  .then(res => log(res));
