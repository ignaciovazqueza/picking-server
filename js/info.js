/*! *******************************************************
 *
 * evolutility-server-node :: info.js
 *
 * https://github.com/evoluteur/evolutility-server-node
 * (c) 2018 Olivier Giulieri
 ********************************************************* */

const logger = require('./utils/logger'),
    pkg = require('../package.json'),
    models = require('../models/all_models'),
    config = require('../config.js');

// - returns list of all models and URLs to query them
function apis(req, res) {
    logger.logReq('GET API', req);

    const baseUrl = req.protocol+'://'+req.headers.host+req.url
    var ms=[];

    if(config.apiInfo){ 
        for (var mid in models){
            var model=models[mid]
            if(model.active){
                var charts = []
                model.fields.forEach(function(f){
                    if(f.type==='boolean'||f.type==='lov'){
                        charts.push(baseUrl+mid+'/chart/'+f.id)
                    }
                })
                ms.push({
                    id: mid,
                    //title: model.title || model.label || '',
                    list: baseUrl+mid,
                    charts: charts,
                    stats: baseUrl+mid+'/stats'
                })
            }
        }
    }
    return res.json(ms);
}

// - returns version number (from package.json)
function version(req, res) {
    logger.logReq('GET VERSION', req);

    return res.json({
        name: pkg.name,
        version: pkg.version
    });
}

// --------------------------------------------------------------------------------------

module.exports = {

	version: version,
    apis: apis,

}
