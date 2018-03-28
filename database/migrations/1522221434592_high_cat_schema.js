'use strict'

const Schema = use('Schema')

class HighCatSchema extends Schema {
  up () {
    this.create('high_cats', (table) => {
      table.increments('high_cat_id').unique().primary()
      table.string('path').notNull().collate('utf8_unicode_ci')
      table.enum('high_cat_status',['enable', 'disabled']).notNull()
      table.datetime('start_time').notNull()
      table.datetime('end_time').notNull()
      table.integer('display_order').notNull()
      table.integer('is_visible').notNull()
      // table.timestamps(true, true)
      table.timestamp('created_at').notNullable().defaultTo(this.fn.now())
      table.timestamp('updated_at').notNullable().defaultTo(this.fn.now())
    })
  }

  down () {
    this.drop(Env.get('DB_PREFIX')+'high_cats')
  }
}

module.exports = HighCatSchema
