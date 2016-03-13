var data = require('../data');
var _= require('lodash');

    exports.list = function list(req, res){
        res.json(
            data
        );
    }

    exports.findByTitle = function findByTitle(req, res) {
        var article = req.params.title;
        var resultat =(
        data
             .chain()
             .filter(function(articles){
                 if ('titre' in articles && article.indexOf(articles.titre) > -1) {
                    return true;
                    } else {
                      return false;
                    }
                  })
              .value()
        );
        res.json(resultat);
    }


    exports.tagsList = function tagsList(req, res){

        //var result = _.groupBy( data, 'date');

        var result = _(data).groupBy(function(row){
            return row.tag;
        });
        result = _(result).map(function(name, tags) {
              return {
                  tag : tags
              }
        });

        res.json(result);

    }
