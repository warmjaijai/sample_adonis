'use strict'

/*
|--------------------------------------------------------------------------
| CatSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class CatSeeder {
  async run () {
      const high_cat_id = await Database.insert({
        path: 'sitemap',
        high_cat_status: 'enable',
        start_time: '2018-01-01 00:00:00',
        end_time:  '2018-06-30 23:59:59',
        is_visible: 1,
        display_order: 1,
      }).table(Env.get('DB_PREFIX')+'high_cats').returning('high_cat_id')
      
      const low_cat_id =  await Database.insert({
        path: 'cats_home',
        low_cat_status: 'enable',
        start_time: '2018-01-01 00:00:00',
        end_time:  '2018-06-30 23:59:59',
        is_visible: 1,
      }).table(Env.get('DB_PREFIX')+'low_cats').returning('high_cat_id')
      await Database.insert({
        high_cat_id: high_cat_id,
        low_cat_id: low_cat_id,
        display_order: 1
      }).table(Env.get('DB_PREFIX')+'high_cat_low_cat_relations')
  }
}

module.exports = CatSeeder
