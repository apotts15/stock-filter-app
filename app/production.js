'use strict';

// Production specific configuration
// ==================================
module.exports = {
    db: {
        mongo: {
            uri:'mongodb://user_name:password@host:port/app_name'
        }
    },
    redis: {
        port: 15185,
        host: 'redis_host',
        options: {
            detect_buffers: true
        }
    },
    appPath:"app",
    seedDB: true
};
