const routes = require('next-routes')

module.exports = routes()                           
    .add('about')                                      
    .add('channel', '/:slug.:id', 'channel')    
    .add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast')                       
     