const {Command} = require("commander");
const program = new Command();

const InputManager = require("./lib/input/input_manager");
program.version('0.0.1');

program
	.option("-d, --debug ", 'output extra debugging')
	.option("-n, --name <name>", 'project name')
	.option("-f --folder <folder>", "project path")
	.option("-t --type <type>", "project patter [mvc or api]")
	.option("-o --orm <orm>", "project orm [sequelize or mongoose]");
program.parse(process.argv);

const input = program.opts();

const inputManager = new InputManager(input);
