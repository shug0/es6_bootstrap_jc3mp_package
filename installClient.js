// Needed modules for building system
const fs    = require('fs-extra');
const path  = require('path');
const exec  = require('child_process').exec;
const chalk = require('chalk');

const echo  = (color, msg) => console.log(chalk[color]());
const resolveApp = relativePath => path.resolve(fs.realpathSync(process.cwd()), relativePath);

// Init path
const clientSrc = resolveApp('./client_src');

// Client Install
echo('magenta', 'INSTALLING CLIENT SIDE...');
exec('npm i', {
    cwd: clientSrc
  }, () => {
    exec('npm run build', {
        cwd: clientSrc
      }, echo('green', 'CLIENT SIDE INSTALLED'));
  }
);
