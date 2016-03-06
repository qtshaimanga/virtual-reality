var Converter=require("csvtojson").Converter;
var fs = require("fs");

var csvConverter = new Converter({
	constructResult:true,
	delimiter:",",
	headers: ["date", "articles", "description"]
});

var readStream = fs.createReadStream("./back/data/articles.csv", {encoding: 'utf8'});

csvConverter.on("end_parsed", function (jsonObj) {
   fs.writeFile('./back/data/articles.json', JSON.stringify(jsonObj, null, 4), function(err) {
       if(err) {
           console.error(err);
       } else {
           console.log("JSON saved to movieList.json");
       }
   });
});


readStream .pipe(csvConverter);
