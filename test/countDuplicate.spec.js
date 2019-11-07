const chai = require("chai");
const expect = chai.expect;
const { countDuplicates } = require("../src/string/duplicates/index");

describe("countDuplicates()", function() {
  "use strict";

  it("exists", function() {
    expect(countDuplicates).to.be.a("function");
  });
  
  it("it should return null", function() {
    const res = countDuplicates(2434);
    expect(res).to.equal(null)
  });

  it("it should return a valid object", function() {
    const  res = countDuplicates("aaaafff");
    expect(res).to.eql({ a: 4, f: 3 });
  });
});
