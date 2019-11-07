const chai = require("chai");
const expect = chai.expect;
const editDistance = require("../src/string/editDistance");

describe("editDistance()", function() {
  "use strict";

  it("exists", function() {
    expect(editDistance).to.be.a("function");
  });

  it("it should return null", function() {
    const res = editDistance(2434);
    expect(res).to.equal(null);
  });

  it("it should return a valid object", function() {
    const res = editDistance("rtg", "abcd");
    expect(res).to.equal(4);
  });
});
