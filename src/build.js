var MarkdownIt = require('markdown-it');
const meta = require('markdown-it-meta')
const fs = require('fs');

const getFiles = (dir) => new Promise((resolve, reject) => {
	fs.readdir(dir, (e, d) => {
		if (e) reject(e);
		else resolve(d);
	})
})

module.exports = async (opts = {dir: '', outFile: ''}) =>  {
	const files = await getFiles(opts.dir);
	const results = (await Promise.all(files.map(async f => {
		const data = await fs.promises.readFile(`${opts.dir}/${f}`, 'utf8');
		var md = new MarkdownIt();
		md.use(meta);
		var html = md.render(data);
		if (md.meta.published === false) return null
		return {name: md.meta.name, quadrant: md.meta.quadrant, ring: md.meta.ring, description: html, isNew: md.meta.isNew ? 'TRUE' : 'FALSE'}
	}))).filter(v => v !== null);

	await fs.promises.writeFile(opts.outFile, JSON.stringify(results))
}
