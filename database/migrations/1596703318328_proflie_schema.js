'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProflieSchema extends Schema {
  up () {
    this.create('proflies', (table) => {
      table.increments()
      table.string('name',)
      table.integer('age',)
      table.timestamps()
    })
  }

  down () {
    this.drop('proflies')
  }
}

module.exports = ProflieSchema
