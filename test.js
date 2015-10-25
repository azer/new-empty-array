var test = require("prova");
var array = require("./");

test('creating an empty array', function (t) {
  t.plan(3);
  t.deepEqual(array(3), [undefined, undefined, undefined]);
  t.deepEqual(array(5), [undefined, undefined, undefined, undefined, undefined]);
  t.deepEqual(array(6).map(Number.call, Number), [0, 1, 2, 3, 4, 5]);
});
