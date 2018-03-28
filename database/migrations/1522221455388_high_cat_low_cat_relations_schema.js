'use strict'

const Schema = use('Schema')

class HighCatLowCatRelationsSchema extends Schema {
  up () {
    this.create('high_cat_low_cat_relations', (table) => {      table.increments()
      table.integer('high_cat_id')
      table.integer('low_cat_id')
      table.integer('display_order').notNull()
      table.timestamp('created_at').notNullable().defaultTo(this.fn.now())
      table.timestamp('updated_at').notNullable().defaultTo(this.fn.now())
    })
    this.raw('alter table '+Env.get('DB_PREFIX')+'high_cat_low_cat_relations'+' change column updated_at updated_at timestamp null on update CURRENT_TIMESTAMP')
  }

  down () {
    this.drop(Env.get('DB_PREFIX')+'high_cat_low_cat_relations')
  }
}

module.exports = HighCatLowCatRelationsSchema
