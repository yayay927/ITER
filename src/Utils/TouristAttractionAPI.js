import React from "react";
import request from "request";
import * as cheerio from "cheerio";

function TouristAttractionData() {
  //   var request = require("request");

  var touristAttractionList = function () {
    request(
      "https://www.tripadvisor.com/Attractions-g147271-Activities-oa%7Boffest%7D-Havana_Ciudad_de_la_Habana_Province_Cuba.html",
      function (error, response, html) {
        if (!error && response.statusCode == 200) {
          console.log(html);
        }
      }
    );
    // request(
    //   {
    //     url: "https://www.tripadvisor.com/Attractions-g147271-Activities-oa%7Boffest%7D-Havana_Ciudad_de_la_Habana_Province_Cuba.html",
    //     method: "GET",
    //   },
    //   function (error, response, html) {
    //     if (error || !html) {
    //       return;
    //     } else {
    //       // 爬完網頁後要做的事情
    //       console.log(html);
    //     }
    //   }
    // );
  };
  return <div id="touristAttractionList"> {touristAttractionList()}</div>;
}

export default TouristAttractionData;
