var MarkdownIt = require('markdown-it');
const meta = require('markdown-it-meta')
const fs = require('fs');

// Lower RING_ORDER values are closer to the center
const RING_ORDER = {
	Adopt: 1,
	Trial: 2,
	Hold: 3,
}

const getFiles = (dir) => new Promise((resolve, reject) => {
	fs.readdir(dir, (e, d) => {
		if (e) reject(e);
		else resolve(d);
	})
})

const parse = async (files, readData) => {
	return (await Promise.all(files.map(async f => {
		const data = await readData(f);
		var md = new MarkdownIt();
		md.use(meta);
		var html = md.render(data);
		if (md.meta.published === false) return null
		return {name: md.meta.name, quadrant: md.meta.quadrant, ring: md.meta.ring, description: html, isNew: md.meta.isNew ? 'TRUE' : 'FALSE'}
	}))).filter(v => v !== null);
}

module.exports = async (opts = {dir: '', outFile: ''}) =>  {
	const files = await getFiles(opts.dir);
	const readData = (f) => fs.promises.readFile(`${opts.dir}/${f}`, 'utf8')
	const results = await parse(files, readData);
	results.sort((a, b) => RING_ORDER[a.ring] - RING_ORDER[b.ring]);
	await fs.promises.writeFile(opts.outFile, JSON.stringify(results, null, 2))
}
