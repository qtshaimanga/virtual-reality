var data = require('../data');
var _= require('lodash');

    exports.list = function list(req, res){
      //console.log(data);
        res.json(
            data
        );
    }

//     /* Fixe elements of selection */
//     // exports.findBySection = function findBySection(req, res) {
//
//           //  var articles = req.params.name.split(',');
//           //  var resultat =(
//
//                )
//     //     res.json(resultat);
//     // }
