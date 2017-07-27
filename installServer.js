// Needed modules for building system
const fs    = require('fs-extra');
const path  = require('path');
const exec  = require('child_process').exec;
const chalk = require('chalk');

const echo  = (color, msg) => console.log(chalk[color]());
const resolveApp = relativePath => path.resolve(fs.realpathSync(process.cwd()), relativePath);

// Init path
const serverSrc = resolveApp('./server_src');

// Server Install
echo('magenta', 'INSTALLING SERVER SIDE...');
exec('npm i', {
    cwd: serverSrc
  }, () => {
    exec('node ./build.js', {
        cwd: serverSrc
      }, echo('green', 'SERVER SIDE INSTALLED')
    );
  }
);
