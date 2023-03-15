var MarkdownIt = require('markdown-it');
const meta = require('markdown-it-meta')
const fs = require('fs');

const getFiles = (dir) => new Promise((resolve, reject) => {
	fs.readdir(dir, (e, d) => {
		if (e) reject(e);
		else resolve(d);
	})
})

async function main() {
	try {
		const files = await getFiles('./blips');
		const results = await Promise.all(files.map(async f => {
			const data = await fs.promises.readFile(`./blips/${f}`, 'utf8');
			var md = new MarkdownIt();
			md.use(meta);
			var html = md.render(data);
			return {...md.meta, description: html, isNew: md.meta.isNew ? 'TRUE' : 'FALSE'}
		}))

		await fs.promises.writeFile('./test.json', JSON.stringify(results))

	} catch (err) {
		console.error(err);
	}
}


main()

