
module.exports = {
    apps: [
      {
        name: 'test_nuxt_ssr',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
        env: {
          "PORT": 49000
        }
      }
    ]
}
