// Needed modules for building system
const packageJSON = require('../package.json');
const fs          = require('fs-extra');
const path        = require('path');
const exec        = require('child_process').exec;
const rimrafSync  = require('rimraf').sync;
const chalk       = require('chalk');

const resolveApp = relativePath => path.resolve(fs.realpathSync(process.cwd()), relativePath);
const echo = (color, msg) => console.log(chalk[color]());

// Init path
const appPackageFolderPath = resolveApp(`../../packages/${packageJSON.name}`);
const serverSrcPackageJson = resolveApp('./src/package.json');

// Clean package survival directory
echo('red', 'Clear target directory...');
rimrafSync(`${appPackageFolderPath}/*`);

// Copy the package.json file
echo('green', 'Copy package.json file...');
fs.copySync(serverSrcPackageJson, `${appPackageFolderPath}/package.json`);

// Download needed packages
echo('magenta', 'Install Node modules...');
exec('npm i', {
  cwd: appPackageFolderPath
}, () => echo('yellow', 'Babel watcher launching ! You can launch your server !'));

