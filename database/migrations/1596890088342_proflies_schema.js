'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfliesSchema extends Schema {
  up () {
    this.create('proflies', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('proflies')
  }
}

module.exports = ProfliesSchema
