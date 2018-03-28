'use strict'
const Logger = use('Logger')
const high = use('App/Models/HighCat')
class SampleController {
    async catalog({params,response}){
        const mc = await high.query()
        .where('high_cat_status','enable')
        .select([
            "high_cat_id",
            "path",
            "high_cat_status",
            "display_order",
            "is_visible",
        ])
        .with('low_cats', function(builder) {
            builder
            .select([
                "low_cat_id",
                "path",
                "low_cat_status",
                "is_visible",
            ])
            .where('low_cat_status', 'enable')
            Logger.info(builder.toSQL())
        })    
        .fetch()
        response.json(mc)
    }
}

module.exports = SampleController
