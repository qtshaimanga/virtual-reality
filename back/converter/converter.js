var Converter=require("csvtojson").Converter;
var fs = require("fs");

var csvConverter = new Converter({
	constructResult:true,
	delimiter:";",
	//headers: ["article", "titre", "name"]
});

var readStream = fs.createReadStream("./*/*/*", {encoding: 'utf8'});

csvConverter.on("end_parsed", function (jsonObj) {
   fs.writeFile('./*/*/*', JSON.stringify(jsonObj, null, 4), function(err) {
       if(err) {
           console.error(err);
       } else {
           console.log("JSON saved to movieList.json");
       }
   });
});


readStream .pipe(csvConverter);
