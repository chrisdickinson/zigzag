var zz = require('./index')
  , test = require('tape')


test('make sure that encode32 encodes as expected', function(assert) {
  var out = []
    , check = []

  for(var i = 0; i < 129; ++i) {
    check[check.length] = i
  }

  out.push(zz.encode32(0))
  for(var i = 1; i < 65; ++i) {
    out.push(zz.encode32(-i))
    out.push(zz.encode32(i))
  }
  assert.deepEqual(check, out)
  assert.end()
})

test('make sure that decode32 decodes as expected', function(assert) {
  var out = []
    , check = []

  for(var i = 0; i < 129; ++i) {
    out[out.length] = zz.decode32(i)
  }

  check[check.length] = 0
  for(var i = 1; i < 65; ++i) {
    check[check.length] = -i
    check[check.length] = i
  }
  assert.deepEqual(check, out)
  assert.end()
})
