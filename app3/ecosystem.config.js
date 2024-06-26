module.exports = {
  apps : [{
    name: 'Express App',
    script: 'server.js',
    instances: "MAX",
    autorestart: true,
    watch: true,
    max_memory_restart: '4G',
    exec_mode:"cluster",
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
