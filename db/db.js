
var Knex = require('knex');
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

<<<<<<< HEAD
module.exports = {
  getAll: function (tableName) {
    return knex.select().table( tableName )
  },

  findOne: function (tableName, params) {
    return knex(tableName).where('id',params.id)
  },

  delete: function (tableName, params) {
    return knex(tableName).where('id',params.id).del()
  },

  update: function (tableName, searchParams, updateInfo) {
    return knex(tableName).where('id',searchParams.id).update(updateInfo)
  }
=======
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
>>>>>>> 081a4cc91e24b94cdb00ca30046cef39b99c5e19
}