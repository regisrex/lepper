#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const path = require('path');

//commandHandlers
const { init, generate} = require('../src/commandHandlers');

program
  .name('npx-proj')
  .description('Node.js project-structure manager built on top of commander.js, developed by pacifiquem@github.com')
  .version('1.0.4');

  program.command('init')
  .description('Command to initialize the project .')
  .argument('<string>', 'name of your project')
  .option('-fo, --folders <value...>', 'folder you want to initialize ?', '')
  .action((argument, options) => {
    let directory = __dirname;
    init(options.folders, directory);
  });

  program.command('generate')
  .description('Command to generate any file in a given folder .')
  .argument('<string>', 'folder file will be generated into .')
  .option('-fi, --files <value...>', 'file you want to generate ?')
  .action((argument, options) => {

    let directory = __dirname;
    directory = path.join(directory, argument);
    generate(options.files, directory);

  });


program.parse();