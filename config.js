exports.database = {
    type: 'redis',
    hostname:  (process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.0.1' ),
    port: (process.env.REDIS_PORT_6379_TCP_PORT || 6379),
    prefix: '#scrumblr#'
};
