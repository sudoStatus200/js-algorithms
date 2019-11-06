const chai = require("chai");
const expect = chai.expect;
const { countDuplicates } = require("../src/string/duplicates/index");

describe("countDuplicates()", function() {
  "use strict";

  it("exists", function() {
    expect(countDuplicates).to.be.a("function");
  });

  it("it should return a valid object", function() {
    var res = countDuplicates("aaaafff");
    expect(res).to.eql({ a: 4, f: 3 });
  });
});
