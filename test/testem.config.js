
/**
 * common config 
 * @see https://github.com/testem/testem/blob/master/docs/config_file.md
 */
module.exports = {
  framework: 'qunit',
  serve_files: [
    'dist/fabric.js'
  ],
  styles: [
    'test/lib/tests.css'
  ],
  routes: {
    '/fixtures': 'test/fixtures',
    '/main': 'test/tests.mustache'
  },
  test_page: 'main?hidepassed&hideskipped&timeout=60000',
  browser_args: {
    Chrome: [
      '--headless',
      '--disable-gpu',
      '--remote-debugging-port=9222'
    ],
    Firefox: [
      '--headless'
    ]
  },
  launch_in_dev: [
    'Chrome',
    'Node',
    'Firefox'
  ],
  launch_in_ci: [
    'Chrome',
    'Node',
    'Firefox'
  ],
  tap_failed_tests_only: !Number(process.env.VERBOSE) || false,
  ignore_missing_launchers: false,
  qunit: {
    filter: process.env.QUNIT_FILTER || null,
  },
  timeout: 540,
  parallel: 4
}