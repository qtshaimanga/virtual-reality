var data = require('../data');
var _= require('lodash');

    exports.list = function list(req, res){
        /*res.json(
            data
        );*/
        var result = _(data).groupBy(function(row){
            return row.date;
        });
        result = _(result).map(function(articles, dates) {
              return {
                  articles : articles,
                  date : dates
              }
        });
        res.json(result);
    }

    exports.findByTag = function findByTag(req, res) {
        var article = req.params.tag;
        var resultat =(
        data
             .chain()
             .filter(function(articles){
                 if ('tag' in articles && article.indexOf(articles.tag) > -1) {
                    return true;
                    } else {
                      return false;
                    }
                  })
              .value()
        );

        result = _(data).groupBy(function(row){
            return row.date;
        });
        result = _(result).map(function(articles, dates) {
              return {
                  articles : articles,
                  date : dates
              }
        });
        res.json(resultat);
    }


    exports.tagsList = function tagsList(req, res){
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
