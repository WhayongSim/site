const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
var async = require("async");

const getHtml = async (page) => {
  try {
    return await axios.get(page);
  } catch (error) {
    console.error(error);
  }
};

const crwlFunction = () => {
  let vlist = [];
  const PAGES = [
    "https://visla.kr/author/whayong/",
    "https://visla.kr/author/whayong/page/2/",
    "https://visla.kr/author/whayong/page/3/",
    "https://visla.kr/author/whayong/page/4/",
  ];
  async.eachSeries(
    PAGES,
    function (url, callback) {
      getHtml(url).then((html) => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("div#upper-post").children("article");
        $bodyList.each(function (i, elem) {
          ulList[i] = {
            title: $(this).find("div.card-content .entry-title").text(),
            url: $(this).find("a").attr("href"),
            image_url: $(this)
              .find("div.post-bg")
              .attr("style")
              .split("background-image:url(")[1]
              .split(")")[0],
            date: $(this).find(".card-date").text(),
            content: $(this).find(".entry-content").text(),
          };
        });
        const data = ulList.filter((n) => n.title);
        vlist = [...data];
        callback(null);
      });
    },
    function (err) {
      console.log(vlist);
      console.log(vlist.length);

      setTimeout(() => {
        crwlFunction();
      }, 1000 * 60 * 60 * 24);
      /*
        const data = ulList.filter((n) => n.title);
          fs.writeFileSync("test.json", JSON.stringify(data));
          return data;
          */
    }
  );
};

const startFunction = () => {
  console.log('start');
  crwlFunction();
};

startFunction();
