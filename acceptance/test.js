var assert = require("assert");
const build = require("../src/build");
const fs = require("fs");
const x = require("../radar.json");
const joi = require("joi");

describe('build "acceptance" test', function () {
  it("Validates against expected schema", () => {
    const schema = joi.array().items(
      joi.object({
        name: joi.string().required(),
        quadrant: joi
          .string()
          .equal("Techniques", "Languages and Frameworks", "Platforms", "Tools")
          .required(),
        ring: joi.string().equal("Adopt", "Trial", "Hold", "Assess").required(),
        description: joi.string().required(),
        isNew: joi.string().allow('"TRUE"', '"FALSE"').required(),
      })
    );
    const result = schema.validate(x, { abortEarly: false });

    reportDetailsIfFailed(result);
    assert.ifError(result.error);
  });
});

const reduceDetailsToMessage = (e) =>
  e.details.map((d) => ({ value: d.context.value, message: d.message }));

const reportDetailsIfFailed = (r) => {
  if (r.error) {
    console.log(reduceDetailsToMessage(r.error));
  }
};
