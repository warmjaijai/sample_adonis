'use strict'

const Schema = use('Schema')

class LowCatSchema extends Schema {
  up () {
    this.create('low_cats', (table) => {
      table.increments('low_cat_id').unique().primary()
      table.string('path').notNull().collate('utf8_unicode_ci')
      table.enum('low_cat_status', ['enable', 'disabled']).notNull()
      table.datetime('start_time').notNull()
      table.datetime('end_time').notNull()
      table.integer('is_visible').notNull()
      table.timestamp('created_at').notNullable().defaultTo(this.fn.now())
      table.timestamp('updated_at').notNullable().defaultTo(this.fn.now())
    })
    this.raw('alter table '+Env.get('DB_PREFIX')+'low_cats'+' change column updated_at updated_at timestamp null on update CURRENT_TIMESTAMP')
  }

  down () {
    this.drop(Env.get('DB_PREFIX')+'cp_cats', (table) => {
      table.dropForeign('high_cat_id', 'low_cats_high_cat_id')
    })
  }
}

module.exports = LowCatSchema
