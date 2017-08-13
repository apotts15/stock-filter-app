'use strict';

// Production specific configuration
// ==================================
module.exports = {
    db: {
        mongo: {
            uri:'mongodb://apotts15:Palooza15@ds111262.mlab.com:11262/heroku_hhl5zbl1'
        }
    },
    redis: {
        port: 15185,
        host: 'redis-15185.c8.us-east-1-4.ec2.cloud.redislabs.com',
        options: {
            detect_buffers: true
        }
    },
    appPath:"../dist",
    seedDB: true
};
