const build = require('./build');

function main() {
	build({ dir: './blips', outFile: './radar.json' }).then(() => {
		process.exit()
	}).catch(e => {
		console.error(e);
		process.exit(1);
	});
}

main();
