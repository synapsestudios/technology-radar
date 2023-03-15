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
		const results = (await Promise.all(files.map(async f => {
			const data = await fs.promises.readFile(`./blips/${f}`, 'utf8');
			var md = new MarkdownIt();
			md.use(meta);
			var html = md.render(data);
			if (md.meta.published === false) return null
			return {name: md.meta.name, quadrant: md.meta.quadrant, ring: md.meta.ring, description: html, isNew: md.meta.isNew ? 'TRUE' : 'FALSE'}
		}))).filter(v => v !== null);

		await fs.promises.writeFile('./radar.json', JSON.stringify(results))

	} catch (err) {
		console.error(err);
	}
}


main()

