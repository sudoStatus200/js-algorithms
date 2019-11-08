const chai = require("chai");
const expect = chai.expect;
const memoizer = require("../src/memoizer");
const performance = require("perf_hooks").performance;

describe("memoizer()", function() {
  "use strict";

  it("exists", function() {
    expect(memoizer).to.be.a("function");
  });

  it("it should return null", function() {
    const res = memoizer(2434);
    expect(res).to.equal(null);
  });

  it("res should be equal to true", function() {
    const fib = memoizer(function(n) {
      if (n < 2) {
        return 1;
      } else {
        return fib(n - 2) + fib(n - 1);
      }
    });

    const t0 = performance.now();
    fib(50);
    const t1 = performance.now();
    fib(50);
    const t2 = performance.now();
    const res = t2 - t1 < t1 - t0 ? true : false;

    expect(res).to.equal(true);
  });
});
