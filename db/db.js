
var Knex = require('knex');
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

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
}