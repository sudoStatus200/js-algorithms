const chai = require("chai");
const expect = chai.expect;
const deepClone = require('../src/deepCloning/deepClone');

describe("deepClone()", function() {
  "use strict";

  it("exists", function() {
    expect(deepClone).to.be.a("function");
  });

  it("it should return data if data is not an object", function() {
    const data = undefined
    const res = deepClone(data);
    expect(res).to.equal(data);
  });

  it("cloned object should not have any reference to source object", function() {
    let source = [3, {a:'a'}]
    let cloned = deepClone(source);
    cloned[1].a = 'z';
    const res = source[1].a !== cloned[1].a ?true: false  
    expect(res).to.equal(true);
  });
});
