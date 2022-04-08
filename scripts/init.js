
// Imports
const { spawnSync } = require('child_process');
const createLogger = require('logging').default;
const path = require('path');
const fs = require('fs');

// Initialize constants and functions
const logger = createLogger('WonolyBrowser');
const wonolyCoreDir = path.resolve(__dirname, '..', 'src', 'wonoly')
const browserCoreGit = 'https://github.com/wonoly/browser-core'

// methods
const run = (cmd, args = [], options = {}) => {
  const { continueOnFail, ...cmdOptions } = options
  logger.debug(`running: ${cmd}\n\targs: ${args}`)
  const prog = spawnSync(cmd, args, cmdOptions)
  if (prog.status !== 0) {
    if (!continueOnFail) {
      console.log(prog.stdout && prog.stdout.toString())
      console.error(prog.stderr && prog.stderr.toString())
      process.exit(1)
    }
  }
  return prog
}

// Initialize
logger.info('Performing browser installation and compillation')

logger.debug('Checking if browser core has been cloned...')

if (!fs.existsSync(path.join(wonolyCoreDir, '.git'))) {
    logger.info('Cloning browser into directory ${wonolyCoreDir}')
    logger.debug(`Creating directory ${wonolyCoreDir}`)
    fs.mkdirSync(wonolyCoreDir)

    run('git', ['clone', browserCoreGit, wonolyCoreDir])
}

logger.info('Installing dependencies on browser core')
run('npm', ['install'], {
    cwd: wonolyCoreDir
})

run('npm', ['run', 'init'], {
  cwd: wonolyCoreDir
})

