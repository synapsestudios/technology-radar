var assert = require('assert');
const build = require('../src/build');
const fs = require('fs');

describe('build "integration" test', function () {
  it('creates a valid json file', async () => {
    await build({ dir: './test/blips', outFile: 'test/test.json' })

    const r = await fs.promises.readFile('test/test.json')
      .then(res => res.toString())
      .then(s => JSON.parse(s));

    r.map(blip => {
      assert.equal(Object.keys(blip).length, 5);
      ['name', 'quadrant', 'ring', 'description', 'isNew'].map(s => {
        assert(Object.keys(blip).includes(s))
      });
      assert(blip.isNew === "TRUE" || blip.isNew === 'FALSE')
    })
  });

  it('fails to build when no args are provided', async () => {
    const executeBuild = () => build();
    return assert.rejects(executeBuild);
  })
});
