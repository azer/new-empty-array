module.exports = newEmptyArray;

function newEmptyArray (n) {
  return Array.apply(null, {length: n});
}
