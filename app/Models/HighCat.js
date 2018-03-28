'use strict'

const Model = use('Model')

class HighCat extends Model {
    static get table(){
        return 'high_cats'
    }
    low_cats(){
        return this.belongsToMany(
            'App/Models/lowCat', // relatedModel,
            'high_cat_id', // foreignKey,
            'low_cat_id',// relatedForeignKey,
            'high_cat_id',// primaryKey,
            'low_cat_id'// relatedPrimaryKey
        )
        .pivotTable('high_cat_low_cat_relations')
    }
}

module.exports = HighCat
