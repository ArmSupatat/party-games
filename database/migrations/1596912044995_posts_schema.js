'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string("game",80).notNullable()
      table.string("details",254).notNullable()
      table.integer("member",60).notNullable()
      table.string("date")
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}



module.exports = PostsSchema
