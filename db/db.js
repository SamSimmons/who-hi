
var Knex = require('knex');
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'test'])

module.exports =  {

    getAll: function (tableName) {
      return knex.select().table( tableName )
    },

    findOne: function (tableName, params) {
      return knex(tableName).where('id',params.id).then(function(data){
      	return data[0]
      })
    },

    add: function (tableName,newEntry) {
      return knex(tableName).insert(newEntry)
    }
}