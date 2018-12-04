// Unpublished Work © 2017-2018 Deere & Company
const cypress = require("cypress");
const start = require("../lib/start-server").start;
const endpoints = require("./controllers/endpoints");

const server = start(false);

server.then(instance => {
	// eslint-disable-next-line no-console
	console.log(`Server for acceptance tests has started`);
	endpoints.map(endpoint => instance.route(endpoint));

	const configFileEnv = process.argv[3];
	const options = {};

	if (configFileEnv) {
		options.env = { configFile: configFileEnv };
	}

	cypress.run(options).then(results => {
		serverCore.initialize.stop();

		// eslint-disable-next-line no-process-exit
		process.exit(results.failures);
	});
});
