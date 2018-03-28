'use strict'

const Model = use('Model')

class LowCat extends Model {
    static get table(){
        return 'low_cats'
    }
    high_cats(){
        return this.belongsToMany(
            'App/Models/highCat', // relatedModel,
            'low_cat_id', // foreignKey,
            'high_cat_id',// relatedForeignKey,
            'low_cat_id',// primaryKey,
            'high_cat_id'// relatedPrimaryKey
        )
        // .pivotModel('App/Models/highCatlowCatRelation')
        .pivotTable('high_cat_low_cat_relations')
    }
}

module.exports = LowCat
